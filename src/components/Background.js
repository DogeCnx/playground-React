import React, { useState } from "react";

function Background(props) {
  const [backgroundColor, setBackgrondColor] = useState("#fff");
  // const [state,setState] = useState();
  const handleClick = () => {
    setBackgrondColor(backgroundColor === "#fff" ? "#f00" : "#fff");
  };
  return (
    <div style={{ backgroundColor }} onClick={handleClick}>
      {backgroundColor === "#fff" ? "white" : "red"}
      {props.children}
    </div>
  );
}

export default Background;
