import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';

//importando bibliotecas do REDUX e REDUX-FORM
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';

import tarefasReducer from './reducers/tarefasReducer';

import tarefasSaga from './sagas/tarefasSaga';

//mapeamento de todos os REDUCERS do projeto..
const rootReducer = combineReducers({  
  form: formReducer, //registrando o REDUCER do REDUX-FORM
  tarefas: tarefasReducer //registrando o REDUCER 'tarefasReducer'
});

//criando o middleware do saga
const sagaMiddleware = createSagaMiddleware();

//criando a STORE do projeto (memória do projeto)!!
const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware) //registrando o saga no redux
);

//executando os componentes saga do projeto
sagaMiddleware.run(tarefasSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
