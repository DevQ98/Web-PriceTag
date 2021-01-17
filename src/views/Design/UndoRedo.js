import React from 'react';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { connect } from 'react-redux';
import { IoArrowRedoSharp, IoArrowUndoSharp } from 'react-icons/io5';
let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p className="tool-bar__UndoRedo">
    <div className=" tool-bar__item">
      <IoArrowUndoSharp data-rh="Undo" data-rh-at="bottom" onClick={onUndo} disabled={!canUndo} />
    </div>
    <div className=" tool-bar__item">
      <IoArrowRedoSharp data-rh="Redo" data-rh-at="bottom" onClick={onRedo} disabled={!canRedo} />
    </div>
  </p>
);

const mapStateToProps = (state) => ({
  canUndo: true,
  canRedo: true,
});
const mapDispatchToProps = {
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
};

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

export default UndoRedo;
