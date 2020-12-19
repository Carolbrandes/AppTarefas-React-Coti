import React from 'react';

class GridTarefas extends React.Component{

    render(){
        return(
            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nome do Compromisso</th>
                        <th>Data / Hora de Início</th>
                        <th>Data / Hora de Término</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary btn-sm mr-1">Editar</button>
                            <button className="btn btn-danger btn-sm">Excluir</button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">
                            Quantidade de tarefas: 0
                        </td>
                    </tr>
                </tfoot>
            </table>
        )
    }

}

export default GridTarefas;