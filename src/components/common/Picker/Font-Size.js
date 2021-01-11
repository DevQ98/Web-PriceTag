import { updateElementAttribute } from 'app/stampSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

const options = [
  { value: '2', label: '2' },
  { value: '4', label: '4' },
  { value: '6', label: '6' },
  { value: '8', label: '8' },
  { value: '10', label: '10' },
  { value: '12', label: '12' },
  { value: '14', label: '14' },
  { value: '16', label: '16' },
  { value: '18', label: '18' },
  { value: '20', label: '20' },
  { value: '24', label: '24' },
  { value: '28', label: '28' },
  { value: '32', label: '32' },
  { value: '36', label: '36' },
  { value: '40', label: '40' },
];
function FontSize(props) {
  const dispatch = useDispatch();
  const handleChangeSize = (event) => {
    const action = updateElementAttribute({
      attrName: 'fontSize',
      attrValue: event.value + 'px',
    });
    dispatch(action);
  };
  return (
    <section>
      <Select
        classNamePrefix="Font"
        style=" minWidth  :120px "
        onChange={handleChangeSize}
        options={options}
        placeholder="16"
      />
    </section>
  );
}

export default FontSize;
