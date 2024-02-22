import { useState } from "react";
import Draggable from "react-draggable";

const DragableNotes = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, data) => {
    // console.log("drag data: ", data);
    console.log("e.target: ", e.target);
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <>
      <Draggable>
        <div
          style={{
            width: "100px",
            height: "100px",
            fontWeight: "bold",
            border: "1px solid black",
            paddingTop: "30px",
            cursor: "grab",
            backgroundColor: "yellow",
            borderRadius: "5px",
          }}
        >
          Note-1
        </div>
      </Draggable>
      <Draggable>
        <div
          style={{
            width: "100px",
            height: "100px",
            fontWeight: "bold",
            border: "1px solid black",
            paddingTop: "30px",
            cursor: "grab",
            backgroundColor: "green",
            borderRadius: "5px",
          }}
        >
          Note-2
        </div>
      </Draggable>
      <Draggable position={position} onDrag={handleDrag}>
        <div
          style={{
            width: "100px",
            height: "100px",
            fontWeight: "bold",
            border: "1px solid black",
            paddingTop: "30px",
            cursor: "grab",
            backgroundColor: "red",
            borderRadius: "5px",
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          Note-3
        </div>
      </Draggable>
    </>
  );
};

export default DragableNotes;
