import React from "react";
import { Button } from "../shared/button/button";

export const ChangingState = () => {
  const [count, setCount] = React.useState(0);
  const [isOn, setIsOn] = React.useState(false);

  React.useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  React.useEffect(() => {
    console.log("App mounted 0");

    return () => {
      console.log("App unmounted 0");
    };
  });

  return (
    <>
      <Button
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
        }}
      >
        count is {count}
      </Button>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        {isOn ? "on" : "off"}
      </button>
      <button
        onClick={() => {
          setIsOn((prev) => !prev);
        }}
      >
        {isOn ? "on" : "off"}
      </button>
      <button
        onClick={() => {
          const newOn = !isOn;
          setIsOn(newOn);
        }}
      >
        {isOn ? "on" : "off"}
      </button>
      <InnerComponent1 />
    </>
  );
};

function InnerComponent1() {
  React.useEffect(() => {
    console.log("InnerComponent1 mounted 0");
  }, []);

  React.useEffect(() => {
    console.log("InnerComponent1 mounted 1");
  }, []);

  return (
    <div className="p-2">
      <h2 className="uderline">InnerComponent1</h2>
    </div>
  );
}
