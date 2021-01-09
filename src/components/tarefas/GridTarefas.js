import React from 'react';
import { connect } from 'react-redux';

//função para acessar variaveis da STORE
//o nome desta função por padrão é: 'mapStateToProps'
const mapStateToProps = state => { //state -> todo o conteudo da STORE
    return {
        //lendo todos os valores gravados pelo tarefasReducer na STORE
        dados: state.tarefas
    }
}

class GridTarefas extends React.Component {

    render() {

        var self = this.props.dados;

        return (
            <div>

                <p>
                    <strong>{self.mensagem_consulta}</strong>
                </p>

                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nome da Tarefa</th>
                            <th>Data / Hora de Início</th>
                            <th>Data / Hora de Término</th>
                            <th>Descrição</th>
                            <th>Operações</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            self.listagem_tarefas.map(
                                (item, i) => (
                                    <tr key={i}>
                                        <td>{item.nome}</td>
                                        <td>{item.dataInicio} às {item.horaInicio}</td>
                                        <td>{item.dataFim} às {item.horaFim}</td>
                                        <td>{item.descricao}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm mr-1">
                                                Editar
                                            </button>
                                            <button className="btn btn-danger btn-sm">
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">
                                Quantidade de tarefas: {self.listagem_tarefas.length}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

}

//componente conectado ao REDUX!
export default connect(mapStateToProps)(GridTarefas);