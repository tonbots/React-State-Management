import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Tambah() {
    setCount(count + 1);
  }

  function Kurang() {
    setCount(count - 1);
  }

  return (
    <div>
      <h3>Counter</h3>
      <div className="counter">
        <button onClick={Kurang}>-</button>
        <h3>{count}</h3>
        <button onClick={Tambah}>+</button>
      </div>
    </div>
  );
};

export default Counter;
