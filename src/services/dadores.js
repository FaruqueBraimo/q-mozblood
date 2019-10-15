
import {http} from "./config"



export default{

    listar:() => {
        return http.get(`dadores`);
    }
    
,
    apagar:(dador) =>{

        return http.delete(`dador` );

    }
    

}