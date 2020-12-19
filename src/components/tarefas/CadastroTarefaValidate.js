//função para retornar os erros de validação do formulário..
//values -> JSON contendo os campos do formulário
export const validate = values => {

    //objeto para retornar as mensagens de erro de validação do formulário..
    const errors = {}; //JSON vazio

    //verificar se cada campo foi preenchido..
    if(!values.nome){
        errors.nome = "Por favor, informe o nome da tarefa.";
    }

    if(!values.descricao){
        errors.descricao = "Por favor, informe a descrição da tarefa.";
    }

    if(!values.dataInicio){
        errors.dataInicio = "Por favor, informe a data de início da tarefa.";
    }

    if(!values.horaInicio){
        errors.horaInicio = "Por favor, informe a hora de início da tarefa.";
    }

    if(!values.dataFim){
        errors.dataFim = "Por favor, informe a data de término da tarefa.";
    }

    if(!values.horaFim){
        errors.horaFim = "Por favor, informe a hora de término da tarefa.";
    }

    return errors;
}