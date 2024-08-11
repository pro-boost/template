import { useState } from "react";
import "./App.css";

function App() {
  const [heading, setHeading] = useState("All Might");

  const handleClick = () => {
    setHeading("Endavor");
  };
  return (
    <>
      <h1>{heading}</h1>
      <button onClick={handleClick}>change hero</button>
    </>
  );
}

export default App;
