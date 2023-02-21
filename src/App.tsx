import React from "react";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="not default text" bgColor="tomato" />
    </div>
  );
}

export default App;
