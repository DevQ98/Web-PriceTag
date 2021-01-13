import * as React from 'react';
import { useState, useRef } from 'react';
import Moveable from 'react-moveable';
import { connect, useDispatch } from 'react-redux';
import Selecto from 'react-selecto';
import { bindActionCreators } from 'redux';
import { setActiveElements } from 'app/stampSlice';
import { saveElement } from '../../actions/designAction.js';
import StampElement from '../../components/common/Draggable/StampElement';
import '../../components/common/Draggable/TxtElement.css';
import {
  updateElementAttribute,
  elementListSelector,
  activeElementListSelector,
} from 'app/stampSlice';

function DesignPageCom(props) {
  const [targets, setTargets] = useState([]);
  const [frameMap] = useState(() => new Map());
  const moveableRef = useRef(null);
  const [frame, setFrame] = useState({ translate: [0, 0] });
  const selectoRef = useRef(null);
  const cubes = [];
  console.log('Props of DesignPage', props);
  const dispatch = useDispatch();
  const handleSelectedElementsChange = (selectedElementList) => {
    const action = setActiveElements(selectedElementList.map((x) => x.id));
    dispatch(action);
  };

  const { stamp } = props;
  return (
    <div className="moveable app" style={{ margin: 'auto' }}>
      {stamp && (
        <>
          <Moveable
            ref={moveableRef}
            draggable={true}
            resizable={true}
            target={targets}
            onResizeStart={({ setOrigin, dragStart }) => {
              setOrigin(['%', '%']);
              dragStart && dragStart.set(frame.translate);
            }}
            onResize={({ target, width, height, drag }) => {
              const beforeTranslate = drag.beforeTranslate;
              debugger;
              frame.translate = beforeTranslate;
              target.style.width = `${width}px`;
              target.style.height = `${height}px`;
              target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
              console.log(target.style.width, target.style.height, 'HW');
              let action = updateElementAttribute({
                attrName: 'width',
                attrValue: target.style.width,
              });
              dispatch(action);
              action = updateElementAttribute({
                attrName: 'height',
                attrValue: target.style.height,
              });
              dispatch(action);
              action = updateElementAttribute({
                attrName: 'transform',
                attrValue: target.style.transform,
              });
              dispatch(action);
            }}
            onClickGroup={(e) => {
              selectoRef.current.clickTarget(e.inputEvent, e.inputTarget);
            }}
            onDragStart={(e) => {
              const target = e.target;

              if (!frameMap.has(target)) {
                frameMap.set(target, {
                  translate: [0, 0],
                });
              }
              const frame = frameMap.get(target);

              e.set(frame.translate);
            }}
            onDrag={(e) => {
              const target = e.target;
              const frame = frameMap.get(target);

              frame.translate = e.beforeTranslate;
              target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
            }}
            onDragEnd={(e) => {
              const target = e.target;

              const action = updateElementAttribute({
                attrName: 'transform',
                attrValue: target.style.transform,
              });
              dispatch(action);

              //   props.saveElement(target.id, target.style.transform);
            }}
            onDragGroupStart={(e) => {
              e.events.forEach((ev) => {
                const target = ev.target;

                if (!frameMap.has(target)) {
                  frameMap.set(target, {
                    translate: [0, 0],
                  });
                }
                const frame = frameMap.get(target);

                ev.set(frame.translate);
              });
            }}
            onDragGroup={(e) => {
              e.events.forEach((ev) => {
                const target = ev.target;
                const frame = frameMap.get(target);

                frame.translate = ev.beforeTranslate;
                target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
                setTimeout(console.log('transformsss', target.style.transform), 1);
              });
            }}
          ></Moveable>
          <Selecto
            ref={selectoRef}
            dragContainer={'.elements'}
            selectableTargets={['.selecto-area .cube']}
            hitRate={0}
            selectByClick={true}
            selectFromInside={false}
            toggleContinueSelect={['shift']}
            ratio={0}
            onDragStart={(e) => {
              const moveable = moveableRef.current;
              const target = e.inputEvent.target;
              if (
                moveable.isMoveableElement(target) ||
                targets.some((t) => t === target || t.contains(target))
              ) {
                e.stop();
              }
            }}
            onSelect={(e) => {
              setTargets(e.selected);
              handleSelectedElementsChange(e.selected);
            }}
            onSelectEnd={(e) => {
              const moveable = moveableRef.current;

              if (e.isDragStart) {
                e.inputEvent.preventDefault();
                setTimeout(() => {
                  moveable.dragStart(e.inputEvent);
                });
              }
            }}
          ></Selecto>
        </>
      )}

      {stamp && (
        <div
          id="element__show"
          className="elements selecto-area items-template "
          style={{
            height: stamp.frame == undefined ? 100 : stamp.frame.h + 'mm',
            width: stamp.frame == undefined ? 100 : stamp.frame.w + 'mm',
            // background: stamp.frame.color == undefined ? '#FFF' : stamp.frame.color,
            backgroundImage: stamp.frame == undefined ? ' ' : `url(${stamp.frame.bgImage})`,
            backgroundSize: stamp.frame == undefined ? '' : stamp.frame.bgSize,
          }}
        >
          {' '}
          {stamp == undefined
            ? stamp.current.elementList.map((element) => {
                return <StampElement key={element.id} element={element} />;
              })
            : stamp.elementList.map((element) => {
                return <StampElement key={element.id} element={element} />;
              })}
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    stamp: state.stamp.current,
  };
};
// handleSelectedElementsChange(e.selected);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      activeElementListSelector,
      setActiveElements,
    },
    dispatch
  );

const DesignPage = connect(mapStateToProps, mapDispatchToProps)(DesignPageCom);

export default DesignPage;
