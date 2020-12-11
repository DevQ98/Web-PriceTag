import React, { useState } from "react";

const ClickE = () => {
  const [hidden, setHidden] = useState(false);
  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <p className={!hidden && 'hidden'}>Xin chào Viblo</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};
export default ClickE;
