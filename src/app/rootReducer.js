import stampReducer from './stampSlice';
import undoable from 'redux-undo';
export default {
  stamp: undoable(stampReducer),
};
