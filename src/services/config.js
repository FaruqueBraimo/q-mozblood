
import axios from 'axios'


export const http = axios.create({
    //http://localhost:8085/api || https://sanguemozapi.herokuapp.com/api/
    baseURL: `https://sanguemozapi.herokuapp.com/api/`

})