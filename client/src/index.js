import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import App_container from './App_container';
import { Provider } from 'react-redux'
import store from './redux/index'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
      <App_container />
    </Provider>
    
  </Router>
    
);

