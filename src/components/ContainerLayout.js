import React from "react";

function ContainerLayout(props) {
  return (
    <div>
      {props.title}
      <div>{props.children}</div>
    </div>
  );
}

export default ContainerLayout;
