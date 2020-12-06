import axios from 'axios';

const apiUrl = "http://cotireact001-001-site1.etempurl.com/api/usuarios"

export const post = usuario  => {
    return axios.post(apiUrl, usuario)
        .then(response => response.data);
}