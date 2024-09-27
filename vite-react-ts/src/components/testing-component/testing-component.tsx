import { useEffect, useLayoutEffect, useState } from "react";
import { Button } from "../shared/button/button";

export const TestingComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const btn = document.getElementById("by-button");
    console.log("1 useEffect", btn);

    const innerHeight = window.innerHeight;
    console.log("useEffect innerHeight", innerHeight);
  }, []);

  useEffect(() => {
    const btn = document.getElementById("by-button");
    console.log("2 useEffect", btn);

    const innerHeight = window.innerHeight;
    console.log("2 useEffect innerHeight", innerHeight);
  }, []);

  useLayoutEffect(() => {
    const btn = document.getElementById("by-button");
    console.log("1 useLayoutEffect", btn);

    const innerHeight = window.innerHeight;
    console.log("1 useLayoutEffect innerHeight", innerHeight);
  }, []);

  useLayoutEffect(() => {
    const btn = document.getElementById("by-button");
    console.log("2 useLayoutEffect", btn);

    const innerHeight = window.innerHeight;
    console.log("useLayoutEffect innerHeight", innerHeight);
  }, []);

  return (
    <div>
      <h1>Testing Component</h1>
      <p>Count: {count}</p>
      <Button id="by-button" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </div>
  );
};
