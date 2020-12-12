import axios from 'axios';
import * as config from '../config/apiConfig';

const url = config.BASE_URI + "/usuarios";

const apiUrl = "http://cotireact001-001-site1.etempurl.com/api/usuarios"

export const post = usuario  => {
    return axios.post(url, usuario)
        .then(response => response.data);
}