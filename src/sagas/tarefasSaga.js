import * as actions from '../actions/tarefasAction';
import * as services from '../services/tarefaServices';

import { all, put, takeEvery, call } from 'redux-saga/effects';

//função assíncrona (thread) para executar a chamada na API
//que irá obter os dados da consulta de tarefas
function* consultarTarefas(action){

    //toda action é composta de 'type' e 'data'
    try{

        console.log('TAREFAS SAGA ATIVADO!!');

        //obtendo da inicio e fim do periodo de pesquisa..
        var dataInicio = action.data.dataInicio;
        var dataFim = action.data.dataFim;

        //executando a chamada para a API, por meio do AXIOS..
        const result = yield call(services.getAll, dataInicio, dataFim);
        
        yield put({ //disparando uma ACTION (dispatch)
            type : actions.SUCESSO_CONSULTAR_TAREFAS,
            data : result
        });
    }
    catch(e){
        yield put({ //disparando uma ACTION (dispatch)
            type : actions.ERRO_CONSULTAR_TAREFAS,
            data : e
        });
    }
}

//Criando o evento que irá fazer com o SAGA execute
//a consulta de tarefas na API (ACTION => CONSULTAR_TAREFAS)
function* watcher(){
    //GATILHO -> O SAGA deverá executar a consulta de tarefas na API
    //sempre que uma ACTION CONSULTAR_TAREFAS for disparada pelo REDUX
    yield takeEvery(actions.CONSULTAR_TAREFAS, consultarTarefas);
}

//declarando o nome do componente SAGA..
export default function* tarefasSaga(){
    yield all([watcher()]);
}