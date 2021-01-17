import stampReducer from './stampSlice';
import undoable from 'redux-undo';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  stamp: undoable(stampReducer),
};
