let isMount = false;

let fiber = {
  chain: null,
};

let workNode = null;

function useState(initValue) {
  function setValue(newValue) {
    this.value = newValue;
  }
  if (fiber.chain) {
    if (isMount) {
      workNode = workNode.next;
    } else {
      let node = {
        value: initValue,
      };
      workNode.next = node;
      workNode = workNode.next;
      workNode.next = fiber.chain;
    }
  } else {
    fiber.chain = {
      value: initValue,
    };
    workNode = fiber.chain;
  }
  return [workNode.value, setValue.bind(workNode)];
}

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  isMount = true;
  console.log(`计数:${count}, 标题${title}`);
  setCount(new Date());
  setTitle("React Hook" + new Date());
}

App();
setTimeout(() => {
  App();
}, 1000);
setTimeout(() => {
  App();
}, 2000);
