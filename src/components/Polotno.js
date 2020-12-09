import React from "react";
import ReactDOM from "react-dom";

import Workspace from "polotno/canvas/workspace";

import { Store } from "polotno/model/store";

const store = Store.create();
store.setSize(500, 500);
const page = store.addPage();

page.set({
  // background: "/tshirt.png"

});

const text = page.addElement({
  x: 50,
  y: 50,
  fontSize: 25,
  type: "text",
  fill: "black",
  text: "Name",
  width: 100
});

const Polotno = () => {
  return (
    <div>
      <div style={{ width: "100vw", height: "calc(100vh - 50px)" }}>
        <Workspace store={store} />
      </div>
    </div>
  );
};

export default Polotno;
