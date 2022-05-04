// 当前执行的副作用函数
let activeEffect;
// 副作用栈 - 副作用执行前入栈、执行后出栈, 栈的最后一个就是当前副作用
const effectStack = [];
// key为对象, value为Map(key为对象的key, value为存储副作用函数的Set)
const bucket = new WeakMap();
// 测试使用的对象
const data = { ok: true, no: false };

const obj = new Proxy(data, {
  get(target, key) {
    // 收集依赖
    track(target, key);
    return target[key];
  },
  set(target, key, newVal) {
    target[key] = newVal;
    // 触发副作用
    trigger(target, key);
  },
});

// 依赖收集
function track(target, key) {
  if (!activeEffect) return;
  // 获取target对应的Map,该Map存储了key和对应的副作用函数
  let depsMap = bucket.get(target);
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }
  // 副作用函数的Set
  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }
  // 前面几步获取当前target的key对应的
  deps.add(activeEffect);
  // 副作用函数的deps属性存储对应的依赖的副作用的Set
  activeEffect.deps.push(deps);
}

// 触发副作用
function trigger(target, key) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;

  const effects = depsMap.get(key);
  // 之所以使用新的Set,是因为如果直接遍历effects,effect的执行会先cleanup清空副作用, 然后执行effect,又收集依赖,导致forEach无限循环
  // 没有cleanup的时候是可以的,因为之前的副作用还在,后续相同的副作用就不会被收集(去重),所以forEach没问题
  const effectsToRun = new Set();
  effects &&
    effects.forEach((effectFn) => {
      // 解决trigger无限循环的问题, 一般是由于副作用函数中又进行了set,导致trigger循环出发
      // 首次trigger时,此处还没触发副作用函数,所以activeEffect还是上次的副作用,因此不想等,进行添加
      // 后续trigger时,如果activeEffect和effectFn相等,表示当前trigger是上次trigger触发的,不需要再执行(否则循环)
      if (effectFn !== activeEffect) {
        effectsToRun.add(effectFn);
      }
    });
  // 这里才开始触发副作用,所以之前是没有触发的,触发的时候才设置activeEffect
  effectsToRun &&
    effectsToRun.forEach((effect) => {
      // 如果scheduler存在,则执行scheduler,scheduler接收effect作为参数
      // 可以通过scheduler手动的控制effect的执行
      if (effect.options.scheduler) {
        effect.options.scheduler(effect);
      } else {
        effect();
      }
    });
}

function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn);
    // activeEffect在副作用执行后才赋值
    activeEffect = effectFn;
    // 清空effectFn
    effectStack.push(effectFn);
    const res = fn();
    effectStack.pop();
    // activeEffect指向副作用栈的最后一项(当前执行的副作用),解决effect嵌套问题
    activeEffect = effectStack[effectStack.length - 1];
    return res;
  };
  effectFn.options = options;
  effectFn.deps = [];
  if (!options.lazy) {
    effectFn();
  }
  return effectFn;
}

// 删除所有依赖的副作用Set中的某个副作用
// 副作用函数上的deps存储了包含副作用的Set
function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i];
    deps.delete(effectFn);
  }
  effectFn.deps.length = 0;
}

// computed 计算属性
function computed(getter) {
  // 1. 缓存的value
  let value;
  // 2. 判断是否需要更新
  let dirty = true;
  // 3. 设置副作用函数
  const effectFn = effect(getter, {
    scheduler() {
      dirty = true; // 依赖发生改变, dirty设置为true,不使用缓存
      trigger(obj, "value"); // 触发obj的value属性的副作用函数
    },
  });
  // 4. computed值 - 包含getter value的对象
  const obj = {
    get value() {
      // 5. 依赖发生改变, 重新计算
      if (dirty) {
        value = effectFn(); // 执行时会将副作用赋值给使用的依赖
        dirty = false;
      }
      // 6. 收集obj的value属性的副作用函数
      track(obj, "value");
      // 7. 返回值
      return value;
    },
  };
  return obj;
}

// const c = computed(()=> 'res:' + obj.ok);
// obj.ok = false;
// console.log(c.value);
// obj.ok = true;
// console.log(c.value);

// 递归触发依赖收集
function traverse(value, visitedArr = new Set()) {
  if (typeof value !== "object" || value === null || visitedArr.has(value))
    return;
  visitedArr.add(value);
  for (const key in value) {
    traverse(value[key], visitedArr);
  }
  return value;
}

// watch接收对象或者getter函数
// 对象直接传递,而基本数据类型需要借助getter函数, 直接传递会丢失响应式
function watch(source, cb, options = {}) {
  let getter;
  if (typeof source === "function") {
    getter = source;
  } else {
    getter = () => traverse(source);
  }
  const job = () => {
    // 设置新值
    newVal = effectFn();
    // 触发回调函数
    cb(newVal, oldVal);
    // 设置旧值
    oldVal = newVal;
  };
  // 记录值的变化
  let newVal, oldVal;
  // 设置副作用函数
  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler() {
      job();
    },
  });
  if (options.immediate) {
    job();
  } else {
    // 设置oldVal的初始值,并且触发副作用函数
    oldVal = effectFn();
  }
}

// watch(
//   () => obj.ok,
//   (newVal, oldVal) => {
//     console.log("val:", newVal, oldVal);
//   }
// );

// obj.ok = false;
// obj.ok = true;

// effect(function(){
//   // console.log(obj.ok);
// }, {
//   scheduler(effect){
//     effect();
//   }
// })

// obj.text = 'a'
// obj.text = 'b'
// obj.text = 'c'
// obj.ok = true;
// obj.text = 'a'
// obj.text = 'b'
// obj.text = 'c'

function shouldSetAsProps(el, key, value) {
  if (key === 'form') {
    return false;
  }
  return key in el;
}

function createRenderer(options) {
  const { createElement, setElementText, insert, patchProps } = options;

  // 挂载元素 - 旧虚拟DOM不存在
  function mountElement(vnode, container) {
    let el;
    if (typeof vnode === "string") {
      insert(vnode, container);
    }
    if (typeof vnode.children === "string") {
      el = createElement(vnode.type)
      setElementText(el, vnode.children);
      insert(el, container);
    } else if (Array.isArray(vnode.children)) {
      el = createElement(vnode.type)
      vnode.children.forEach((child) => {
        patch(null, child, el);
      });
      insert(el, container);
    }

    if (vnode.props) {
      for (const key in vnode.props) {
        console.log(key, vnode.props[key]);
        patchProps(el, key, null, vnode.props[key]);
      }
    }
  }

  // n1为旧vnode, n2为新vnode, container为容器
  function patch(n1, n2, container) {
    if (!n1) {
      mountElement(n2, container);
    } else {
      // n1存在, 打补丁,暂时省略
    }
  }

  function render(vnode, container) {
    if (vnode) {
      patch(container._vnode, vnode, container);
    } else {
      if (container._vnode) {
        container.innerHTML = "";
      }
    }
    container._vnode = vnode;
  }
  return {
    render,
    patch,
  };
}

const vnode = {
  type: "div",
  props: {
    style: {
      display: 'block',
      width: '100px',
      height: '200px',
      color: "red",
      background: 'blue'
    },
  },
  children: [
    "xxxx",
    {
      type: "h1",
      children: "标题",
    },
  ],
};

const renderer = createRenderer({
  createElement(tag) {
    return document.createElement(tag);
  },
  setElementText(el, text) {
    el.textContent = text;
  },
  insert(el, parent, anchor = null) {
    if (typeof el === "string") {
      parent.insertBefore(document.createTextNode(el), anchor);
    } else {
      parent.insertBefore(el, anchor);
    }
  },
  patchProps(el, key, preValue, nextValue) {
    if (shouldSetAsProps(el, key, nextValue)) {
      const type = typeof el[key];
      if (type === "boolean" && nextValue === "") {
        el[key] = true;
      } else {
        if(typeof nextValue === 'object'){
          // 如果props传递的是对象的话 转化成key:value;形式
          el[key] = Object.keys(nextValue).reduce((pre,cur,index,arr)=>`${arr[index]}:${nextValue[arr[index]]};`,'')
        }else{
          el[key] = nextValue;
        }
      }
    } else {
      el.setAttribute(key, nextValue);
    }
  },
});

renderer.render(vnode, document.getElementById("app"));
