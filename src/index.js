import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';


let rendererWindow = (state) => { //Для перерисовки страницы. Временно

ReactDOM.render(
  <BrowserRouter>
   <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)} />
    {/* Bind для преопределения контекста. Функция будет вызываться ниже по дереву */}
   </React.StrictMode>
   </BrowserRouter>,
  document.getElementById('root')
);

}

rendererWindow(store.getState());
store.subscribe(() => { //Функция наблюдатель. observer
  let state = store.getState();
  rendererWindow(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// reportWebVitals();
