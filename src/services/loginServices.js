import axios from 'axios';

const apiUrl = "http://cotireact001-001-site1.etempurl.com/api/login";

export const post = (auth) => {
 
    //executando uma chamada HTTP POST para a API..
    return axios.post(apiUrl, auth)
        .then( //função que captura o PROMISSE da API (retorno)
            response => {
                return response.data; //retornando o conteudo devolvido pela API..
            }
        );
}