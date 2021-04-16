import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { 
  createStore, 
  applyMiddleware, 
  compose,
  combineReducers 
} from 'redux';
import thunk from 'redux-thunk';
import Root from './Root'
import { usersReducer } from './reducers/usersReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const store = createStore(
    combineReducers({
      users: usersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

ReactDOM.render(
  <React.StrictMode>
    <Root store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
