import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import reportWebVitals from './reportWebVitals';

//importando bibliotecas do REDUX e REDUX-FORM
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//mapeamento de todos os REDUCERS do projeto..
const rootReducer = combineReducers({
  //registrando o REDUCER do REDUX-FORM
  form: formReducer
});

//criando a STORE do projeto (memória do projeto)!!
const store = createStore(rootReducer);

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

// If you want to start measuring performance in your app, 
