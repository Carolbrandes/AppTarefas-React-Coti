import axios from 'axios';
import * as config from '../config/apiConfig';
import * as auth from '../auth/authServices';

const url = config.BASE_URI + "/tarefas";

export const post = (tarefa) => { 
    return axios.post(url, tarefa)
        .then( 
            response => {
                return response.data; 
            }
        );
}

export const put = (tarefa) => { 
    return axios.put(url, tarefa)
        .then( 
            response => {
                return response.data; 
            }
        );
}

export const remove = (id) => { 
    return axios.delete(url + "/" + id)
        .then( 
            response => {
                return response.data; 
            }
        );
}

export const getAll = () => { 
    return axios.get(url)
        .then( 
            response => {
                return response.data; 
            }
        );
}

export const getById = (id) => { 
    return axios.get(url + "/" + id)
        .then( 
            response => {
                return response.data; 
            }
        );
}

//função do AXIOS para interceptar requisições
axios.interceptors.request.use(
    config => {

        //verificar se a requisição feita para a API
        //corresponde a um serviço '/tarefas'
        if(config.url.endsWith('tarefas')){
            //incluir o TOKEN no HEADER da requisição
            config.headers['Authorization'] = 'Bearer ' + auth.getAccessToken();
        }
        
        return config;
    },
    error => {
        Promise.reject(error);
    }
)
