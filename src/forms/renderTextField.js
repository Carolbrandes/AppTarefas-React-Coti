import React from 'react';

export const renderTextField = ({
    //entrada de parametros..
    type, //tipo do campo input (text, date, password, etc..)
    label, //rotulo do campo
    input, //demais propriedades do campo (readonly, maxlength, etc..)
    placeholder, //marca d'água do campo
    meta: { //parametro utilizado pelo REDUX-FORM para exibir erros de validação
        touched, //evento (SUBMIT ou sair do campo)
        error //mensagem de erro
    }
}) => (
    <div className="form-group">
        <label className="control-label">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            {...input}
            className="form-control"
        />
        {
            touched && (
                error && 
                <span className="text-danger">
                    {error}    
                </span>
            )
        }
    </div>
);
