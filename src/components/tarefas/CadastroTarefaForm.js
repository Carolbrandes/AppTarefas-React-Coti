import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { renderTextField } from '../../forms/renderTextField';
import { renderTextAreaField } from '../../forms/renderTextAreaField';
import { validate } from './CadastroTarefaValidate';

//criando um componente atraves de função
let CadastroTarefaForm = props => {

    //receber como parametro uma função que será executada no SUBMIT do formulário
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

            <div className="row">
                <div className="col-md-6">

                    <Field name="nome"
                        type="text"
                        label="Nome da Tarefa:"
                        placeholder="Ex: Reunião de Trabalho"
                        component={renderTextField}
                    />

                    <Field name="descricao"
                        label="Descrição da Tarefa:"
                        placeholder="Digite aqui"
                        rows="5"
                        component={renderTextAreaField}
                    />

                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="dataInicio"
                                type="date"
                                label="Data de Início:"
                                component={renderTextField}
                            />
                        </div>
                        <div className="col-md-6">
                            <Field name="horaInicio"
                                type="text"
                                label="Hora de Início:"
                                placeholder="00:00"
                                component={renderTextField}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Field name="dataFim"
                                type="date"
                                label="Data de Término:"
                                component={renderTextField}
                            />
                        </div>
                        <div className="col-md-6">
                            <Field name="horaFim"
                                type="text"
                                label="Hora de Término:"
                                placeholder="00:00"
                                component={renderTextField}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-success">
                        Cadastrar Tarefa
                    </button>
                </div>
            </div>

        </form>
    )
}

//função do REDUX-FORM para limpar os campos do formulário..
const afterSubmit = (result, dispatch) => {
    dispatch(reset('cadastroTarefa'));
};

//declarando este componente como um REDUX-FORM
CadastroTarefaForm = reduxForm({
    form: 'cadastroTarefa',
    onSubmitSuccess : afterSubmit, //evento para limpar os campos do formulario
    validate //aplicando o validador!
})(CadastroTarefaForm);

export default CadastroTarefaForm;



