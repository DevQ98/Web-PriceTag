import React from 'react';
import { CompactPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { updateFrame } from 'app/stampSlice';

function BGComponent(props) {
  const dispatch = useDispatch();
  const handleChangeBGColor = (colors) => {
    const color = colors.hex;
    const action = updateFrame({ color });
    dispatch(action);
  };
  return <CompactPicker onChangeComplete={handleChangeBGColor} />;
}
export default BGComponent;
