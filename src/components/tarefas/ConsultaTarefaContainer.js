import React from 'react';
import ConsultaTarefaForm from './ConsultaTarefaForm';
import GridTarefas from './GridTarefas';
import { connect } from 'react-redux'; //conectar o componente ao REDUX..
import * as actions from '../../actions/tarefasAction'; //importando os nomes das ACTIONS!

class ConsultaTarefaContainer extends React.Component {

    //função executada no SUBMIT do formulário
    //values -> JSON contendo os valores preenchidos no formulário
    handleSubmit = (values) => {
        
        //disparando uma ACTION para o REDUX!!
        this.props.dispatch({
            type : actions.CONSULTAR_TAREFAS, //nome da ACTION!
            data : values //dados da ACTION!
        });
    }

    render() {
        return (
            <div>
                <h1 className="h3 mb-4">Consulta de Tarefas</h1>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6>Pesquisa de tarefas por período de datas</h6>
                    </div>
                    <div className="card-body">
                        <ConsultaTarefaForm onSubmit={this.handleSubmit}/>
                        <hr/>
                        <GridTarefas/>
                    </div>
                </div>
            </div>
        )
    }

}

//conectando o componente ao REDUX..
export default connect()(ConsultaTarefaContainer);



