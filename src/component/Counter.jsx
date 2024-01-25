import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(1);

  let handleclick=()=>{
   setCount((prevCount)=>{
    return prevCount+1;
   })
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleclick}>Click</button>
    </div>
  );
}

export default Counter;
