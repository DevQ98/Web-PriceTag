import React, { useState } from 'react';
import { CompactPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { updateFrame } from 'app/stampSlice';

function BGComponent(props) {
  const [color, setColor] = useState();
  const dispatch = useDispatch();
  const handleChangeBGColor = (colors) => {
    setColor(colors.hex);
    const color = colors.hex;
    const bgImage = '';
    const action = updateFrame({ color, bgImage });
    dispatch(action);
  };
  return <CompactPicker color={color} onChangeComplete={handleChangeBGColor} />;
}
export default BGComponent;
