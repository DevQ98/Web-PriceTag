import { createSelector, createSlice } from '@reduxjs/toolkit';
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
      localStorage.setItem('Price', JSON.stringify(state));
    },
    removeElement(state, action) {
      const activeElementIdxList = state.current.elementList.reduce((idxList, element, idx) => {
        if (!element.isActive) idxList.push(element);
        return idxList;
      }, []);
      state.current.elementList = activeElementIdxList;
      return state;

      // state.current.elementList = state.current.elementList.filter(
      //   (element) => element.id == action.payload
      // );

      // return state;
    },
    updateFrame(state, action) {
      if (!state.current) return state;
      state.current.frame = {
        ...state.current.frame,
        ...action.payload,
      };
      localStorage.setItem('Price', JSON.stringify(state));
    },

    updateElementAttribute(state, action) {
      console.log(state.current.elementList);
      const activeElementIdxList = state.current.elementList.reduce((idxList, element, idx) => {
        if (element.isActive) idxList.push(idx);
        return idxList;
      }, []);
      console.log(activeElementIdxList);
      activeElementIdxList.forEach((elementIdx) => {
        const elementAttributes = state.current.elementList[elementIdx].attributes;
        if (!elementAttributes) {
          state.current.elementList[elementIdx].attributes = {};
        }
        const { attrName, attrValue } = action.payload;
        state.current.elementList[elementIdx].attributes[attrName] = attrValue;
      });
      localStorage.setItem('Price', JSON.stringify(state));
    },

    setActiveElements(state, action) {
      const activeElementIdList = action.payload;
      console.log(action.payload, ' action');
      if (state.current.elementList)
        state.current.elementList.forEach((element) => {
          console.log(element.elementId, 'id');
          console.log(activeElementIdList);
          element.isActive = activeElementIdList.includes(element.id.toString());
        });
      localStorage.setItem('Price', JSON.stringify(state));
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
  removeElement,
  setCurrentStamp,
  updateElementAttribute,
  updateFrame,
  addElement,
  setActiveElements,
} = stampSlice.actions;

// export default undoablestampSlice;
export default stampSlice.reducer;
