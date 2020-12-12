import axios from 'axios';
import * as config from '../config/apiConfig';

const url = config.BASE_URI + "/login";

export const post = (auth) => {

    //executando uma chamada HTTP POST para a API..
    return axios.post(url, auth)
        .then( //função que captura o PROMISSE da API (retorno)
            response => {
                return response.data; //retornando o conteudo devolvido pela API..
            }
        );
}