/* eslint-disable eqeqeq */
import {
  activeElementListSelector,
  removeElement,
  setActiveElements,
  updateElementAttribute,
} from 'app/stampSlice';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Moveable from 'react-moveable';
import { connect, useDispatch } from 'react-redux';
import Selecto from 'react-selecto';
import { bindActionCreators } from 'redux';
import StampElement from '../../components/common/Draggable/StampElement';
import '../../components/common/Draggable/TxtElement.css';

function DesignPageCom(props) {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (window.event.keyCode === 46) {
        console.log(props.stamp, e.key);
      }
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [targets, setTargets] = useState([]);
  const [frameMap] = useState(() => new Map());
  const moveableRef = useRef(null);
  const [frame] = useState({ translate: [0, 0] });
  const selectoRef = useRef(null);

  console.log('Props of DesignPage', props);
  const isActiveList = () => {
    window.addEventListener('keydown', (e) => {
      if (window.event.keyCode === 46) {
        const action = removeElement();
        dispatch(action);
      }
    });
  };
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
              //const moveable = moveableRef.current;
              const target = e.inputEvent.target;
              if (targets.some((t) => t === target || t.contains(target))) {
                e.stop();
              }
            }}
            onSelect={(e) => {
              handleSelectedElementsChange(e.selected);
            }}
            onSelectEnd={(e) => {
              isActiveList();
              // const moveable = moveableRef.current;
              setTargets(e.selected);
              if (e.isDragStart) {
                e.inputEvent.preventDefault();
                //   moveable.dragStart(e.inputEvent);
              }
            }}
          ></Selecto>
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
              });
            }}
          ></Moveable>
        </>
      )}

      {stamp && (
        <div
          id="element__show"
          className="elements selecto-area items-template "
          style={{
            height: stamp.frame === undefined ? 100 : stamp.frame.height + 'mm',
            width: stamp.frame === undefined ? 100 : stamp.frame.width + 'mm',
            backgroundColor: stamp.frame === undefined ? '#FFF' : stamp.frame.color,
            backgroundImage: stamp.frame === undefined ? ' ' : `url(${stamp.frame.bgImage})`,
            backgroundSize: stamp.frame === undefined ? '' : stamp.frame.bgSize,
          }}
        >
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
    stamp: state.stamp.present.current,
  };
};
// handleSelectedElementsChange(e.selected);
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onUndo: () => dispatch(UndoActionCreators.undo()),
      activeElementListSelector,
      // setActiveElements,
    },
    dispatch
  );

const DesignPage = connect(mapStateToProps, mapDispatchToProps)(DesignPageCom);

export default DesignPage;
