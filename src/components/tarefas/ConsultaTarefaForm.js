import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../forms/renderTextField';
import { validate } from './ConsultaTarefaValidate';

let ConsultaTarefaForm = props => {

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>

            <div className="row">
                <div className="col-md-4">
                    <Field name="dataInicio"
                        type="date"
                        label="Data de Início"
                        component={renderTextField} />
                </div>
                <div className="col-md-4">
                    <Field name="dataFim"
                        type="date"
                        label="Data de Término"
                        component={renderTextField} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <button type="submit" className="btn btn-success">
                        Pesquisar Tarefas
                    </button>
                </div>
            </div>

        </form>
    )
}

//registrando o formulário como um REDUX-FORM
ConsultaTarefaForm = reduxForm({
    form : 'consultaTarefa',
    validate //aplicando o validador!
})(ConsultaTarefaForm);

//exportando
export default ConsultaTarefaForm;