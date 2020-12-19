//função para retornar os erros de validação do formulário..
//values -> JSON contendo os campos do formulário
export const validate = values => {

    //objeto para retornar as mensagens de erro de validação do formulário..
    const errors = {}; //JSON vazio

    if(!values.dataInicio){
        errors.dataInicio = "Por favor, informe a data de início da tarefa.";
    }

    if(!values.dataFim){
        errors.dataFim = "Por favor, informe a data de término da tarefa.";
    }

    return errors;
}