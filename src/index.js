import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //для асинхронных событий
import { rootReducer } from './redux/rootReduser';
import App from './App';
import { forbiddenWordsMiddleware } from './redux/middleware';


// создаем хранилище
const store = createStore(rootReducer,
  compose(applyMiddleware(
    thunk,
    forbiddenWordsMiddleware,
  ) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// делаем связку компонентов с редуксом, так они "о нем узнают"
const app = (
  <Provider store={store}>
    <App />
    </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);
