
import './App.css';
import { useState } from "react";


function App() {
  const [fontSize, setFontSize] = useState("16px");

  const changeFontSize = (size) => {
    switch (size) {
      case "small":
        setFontSize("16px");
        break;
      case "medium":
        setFontSize("20px");
        break;
      case "large":
        setFontSize("24px");
        break;
      default:
        setFontSize("16px");
    }
  };
  return (
    <>
      <div style={{ fontSize }}>
      <div>
        <h3>Font Size</h3>
        <button onClick={() => changeFontSize("small")}>S</button>
        <button onClick={() => changeFontSize("medium")}>M</button>
        <button onClick={() => changeFontSize("large")}>L</button>
      </div>
      <tr></tr>
      <div>
        <TableCreate students={students}></TableCreate>
      </div>
      <div></div>
    </div>
    </>
  );
}

export default App;
