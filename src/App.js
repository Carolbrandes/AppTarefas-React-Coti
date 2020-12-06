import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

// importando componentes
import Login from './components/usuarios/Login';
import Register from './components/usuarios/Register';

class App extends React.Component {
  // metodo para renderizar o conteudo html do componente
  render() {
    return (
      <HashRouter>
        <div className="container mt-4">
          <div>
            <NavLink to="/login" className="btn btn-light mr-2" >Acessar Sistemas</NavLink> 
            <NavLink to="/register"  className="btn btn-light">Criar Conta do Usuário</NavLink>
          </div>

          <div className="mt-5">
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;