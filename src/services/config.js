
import axios from 'axios'


export const http = axios.create({
    baseURL: `https://sanguemozapi.herokuapp.com/api/`

})