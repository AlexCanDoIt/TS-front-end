/* Modules */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";

/* Components */
import App from './App';

/* Styles */
import 'modern-normalize/modern-normalize.css';
import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
