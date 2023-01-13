import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>counter Value - {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
