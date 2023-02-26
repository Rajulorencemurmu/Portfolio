import React from 'react'
import  ReactDOM from 'react-dom/client'
// import Router from 'react'
// import { createRoot } from 'react-dom/client';

import App from './App'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<Router><App/></Router>);

// ReactDOM.render(<App/>, document.getElementById('root'))
