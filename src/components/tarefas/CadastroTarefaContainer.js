import React from 'react';
import CadastroTarefaForm from './CadastroTarefaForm';
import * as services from '../../services/tarefaServices';

class CadastroTarefaContainer extends React.Component {

    //construtor..
    constructor(props){
        super(props);

        this.state = { mensagem : '' }
    }

    //Função que irá processar o evento SUBMIT do formulário
    //values -> corresponde aos campos do formulário
    handleSubmit = (values) => {
                
        this.setState({
            mensagem : 'Processando requisição, por favor aguarde.'
        });

        //enviando uma requisição POST para a API..
        services.post(values)
            .then( //PROMISSE DE SUCESSO!
                data => { 
                    this.setState({ mensagem : data });
                 }
            )
            .catch( //PROMISSE DE ERRO!
                error => {
                    this.setState({ mensagem : 'Ocorreu um erro!' });
                    console.log(error);
                }
            )    
    }

    render() {
        return (
            <div>
                <h1 className="h3 mb-4">Cadastro de Tarefas</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6>Formulário de cadastro</h6>
                    </div>
                    <div className="card-body">

                        <div className="mb-2">
                            <strong>{this.state.mensagem}</strong>
                        </div>

                        <CadastroTarefaForm onSubmit={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default CadastroTarefaContainer;
