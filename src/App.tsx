import { useState } from "react";
import "./App.css";

function App() {
  const [boxes, setBoxes] = useState<string[]>(["A", "B", "C"]);

  function handleInputChange(e: string, index: number) {
    setBoxes((prevBoxes) => {
      return prevBoxes.map((box) => {
        if (box === prevBoxes[index]) {
          return e;
        }
        return box;
      });
    });
  }
  function handlePlusClick(index: number) {
    setBoxes((prevBoxes) => {
      return [
        ...prevBoxes.slice(0, index + 1),
        "",
        ...prevBoxes.slice(index + 1),
      ];
    });
  }

  return (
    <div className="App">
      <div className="boxes">
        {boxes.map((box, index) => (
          <>
            <div className="box" key={index}>
              <input
                onChange={(e) => handleInputChange(e.target.value, index)}
                type="text"
                value={box}
              />
              <Plus index={index} handlePlusClick={handlePlusClick} />
            </div>
          </>
        ))}
      </div>
      <br />
      <br />
      {boxes.join(" , ")}
    </div>
  );
}

function Plus({
  handlePlusClick,
  index,
}: {
  handlePlusClick: Function;
  index: number;
}) {
  const [plusHovered, setPlusHovered] = useState<boolean>(false);
  return (
    <span
      className="plus"
      onMouseEnter={() => setPlusHovered(true)}
      onMouseLeave={() => setPlusHovered(false)}
      onClick={() => handlePlusClick(index)}
    >
      {plusHovered && <span>+</span>}
    </span>
  );
}

export default App;
