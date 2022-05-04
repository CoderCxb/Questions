import { useState } from './useState.mjs';

function App(){
  const [count, useCount] = useState(0);
  console.log(count);
  useCount(10);
  console.log(count);
}


