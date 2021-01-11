import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  current: null,
};

const stampSlice = createSlice({
  name: 'stamp',
  initialState,
  reducers: {
    setCurrentStamp(state, action) {
      state.current = action.payload;
    },
    addElement(state, action) {
      state.current.elementList.push(action.payload);
    },

    updateFrame(state, action) {
      if (!state.current) return state;

      state.current.frame = {
        ...state.current.frame,
        ...action.payload,
      };
    },

    updateElementAttribute(state, action) {
      const activeElementIdxList = state.current.elementList.reduce((idxList, element, idx) => {
        if (element.isActive) idxList.push(idx);

        return idxList;
      }, []);
      activeElementIdxList.forEach((elementIdx) => {
        const elementAttributes = state.current.elementList[elementIdx].attributes;
        if (!elementAttributes) {
          state.current.elementList[elementIdx].attributes = {};
        }
        const { attrName, attrValue } = action.payload;
        console.log(state.current.elementList[elementIdx].attributes[attrName], ' List');

        console.log(attrName, attrValue, 'action');
        state.current.elementList[elementIdx].attributes[attrName] == attrValue
          ? (state.current.elementList[elementIdx].attributes[attrName] = 'normal')
          : (state.current.elementList[elementIdx].attributes[attrName] = attrValue);
      });
    },

    setActiveElements(state, action) {
      const activeElementIdList = action.payload;
      console.log(activeElementIdList, 'List active');

      state.current.elementList.forEach((element) => {
        element.isActive = activeElementIdList.includes(element.id.toString());
      });
    },
  },
});

export const elementListSelector = createSelector((state) =>
  state.stamp.current ? state.stamp.current.elementList : []
);
export const activeElementListSelector = createSelector(elementListSelector, (elementList) =>
  elementList.filter((x) => x.isActive)
);

export const {
  setCurrentStamp,
  updateElementAttribute,
  updateFrame,
  addElement,
  setActiveElements,
} = stampSlice.actions;
export default stampSlice.reducer;
