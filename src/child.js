import React from "react";

function Child(props) {
  const { children } = props;
  return (
    <div>
      <div>
        <h1>{children}</h1>
      </div>
    </div>
  );
}

export default Child;
