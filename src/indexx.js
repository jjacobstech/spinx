import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Bottom from './Bottom';
import Nav from './Nav';
import Body from './Body';
import reportWebVitals from './reportWebVitals';

const nav = ReactDOM.createRoot(document.getElementById('nav'));
const body = ReactDOM.createRoot(document.getElementById('body'));


nav.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

body.render(
  <React.StrictMode>
    <Body />

  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// const heading = ReactDOM.createRoot(document.getElementById('heading'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// heading.render(
//   <React.StrictMode>
//     <Bottom />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
