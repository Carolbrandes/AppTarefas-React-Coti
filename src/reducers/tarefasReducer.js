import * as actions from '../actions/tarefasAction';

//objeto que irá conter todos os dados que o reducer irá
//armazenar na store do REDUX..
const initialState = {
    mensagem_consulta : '',
    periodo_consulta : {},
    listagem_tarefas : []
}

//Declarando o reducer..
const tarefasReducer = (
    //definindo os dados que o reducer poderá armazenar na store
    state = initialState,
    //permite ao reducer 'escutar' as ACTIONS do projeto
    action //composto dos atributos type e data
) => {

    //verificando qual ACTION iremos 'escutar'
    switch(action.type){

        case actions.CONSULTAR_TAREFAS:

            console.log('TAREFAS REDUCER ATIVADO!');
            console.log(action.data);

            //adicionando / modificando o conteudo da STORE
            return {
                ...state, //spread
                mensagem_consulta : 'Nova consulta de tarefas realizada!',
                periodo_consulta : action.data
            }

        case actions.SUCESSO_CONSULTAR_TAREFAS:
            console.log(action.data);
            return {
                ...state,
                listagem_tarefas : action.data
            }

        case actions.ERRO_CONSULTAR_TAREFAS:
            console.log(action.data);
            return state;

        default:
            return state;
    }

}

//exportando
export default tarefasReducer;