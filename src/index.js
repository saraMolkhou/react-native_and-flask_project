// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { AppRegistry } from 'react-native';
// AppRegistry.registerComponent('App', () => App);
// AppRegistry.runApplication('App',{
//   initialProps:{},
//   rootTag: document.getElementById('root')
// })

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { AppRegistry } from 'react-native';
import App from './App';
const appName = 'MyApp';
// Register the app
AppRegistry.registerComponent(appName, () => App);

// Run the application
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

