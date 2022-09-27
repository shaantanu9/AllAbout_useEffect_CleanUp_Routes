import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const intial = 100;
  const [count, setCount] = useState(intial);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    if (intial !== count) setCount1((prev) => prev + 5);
  }, [count]); //cb ,DPA

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h1> count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Count Add 1 </button>
      <h1>count1: {count1}</h1>
    </div>
  );
}
