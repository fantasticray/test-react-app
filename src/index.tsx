import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import P2PSimple from "./components/P2PSimple";
ReactDOM.render(
  <P2PSimple />,
  document.getElementById("root")
)
serviceWorker.unregister();
