import React from 'react';
import ConsultaTarefaForm from './ConsultaTarefaForm';
import GridTarefas from './GridTarefas';

class ConsultaTarefaContainer extends React.Component {

    handleSubmit = (values) => {
        console.log(values);
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

export default ConsultaTarefaContainer;
