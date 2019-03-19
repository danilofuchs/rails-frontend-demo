import * as React from "react";
const { useState } = React;

interface IHelloTypescriptProps {
  possibleStatus: [string, string];
}
function HelloTypescript(props: IHelloTypescriptProps) {
  const [statusIndex, setStatusIndex] = useState(0);
  function toggleStatus() {
    setStatusIndex((statusIndex + 1) % 2);
  }
  return (
    <>
      <div>{props.possibleStatus[statusIndex]}</div>
      <button onClick={toggleStatus}>Change status</button>
    </>
  );
}
export default HelloTypescript;
