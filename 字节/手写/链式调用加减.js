// get(0).add(1).sub(2).mul(3), 返回值为 { value: -3 }


function get(initValue){
  const obj  = {
    value: initValue,
  };

  Object.defineProperty(obj, 'add',{
    enumerable:false,
    value: function(value){
      this.value += value;
      return this
    }
  })
  Object.defineProperty(obj, 'sub',{
    enumerable:false,
    value: function(value){
      this.value -= value;
      return this
    }
  })
  Object.defineProperty(obj, 'mul',{
    enumerable:false,
    value: function(value){
      this.value *= value;
      return this
    }
  })
  return obj;
}


console.log(get(0).add(1).sub(2).mul(3));
console.log(get(10));
