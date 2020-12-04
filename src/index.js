import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'polotno/model/store';

const store = createStore();
window.store = store;


if (localStorage.getItem('polotno-state')) {
    const json = JSON.parse(localStorage.getItem('polotno-state'));
    store.loadJSON(json);
} else {
    store.addPage();
}

store.on('change', () => {
    const json = store.toJSON();
    delete json.history;
    delete localStorage.setItem('polotno-state', JSON.stringify(json));
});

ReactDOM.render(<App store={store} />, document.getElementById('root')
);