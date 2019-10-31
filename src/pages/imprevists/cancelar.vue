<template>
    
  <div class="q-pa-lg">
    <div class="q-gutter-md row items-end">

       <q-select
        filled
        v-model="dador"
        :options="options"
          stack-label
        label="Dador"
        hint="Joao Felix"
        style="width: 250px"
      />




    <q-input filled v-model="lista.desc" mask="" :rules="['']"  hint="Motivo"  
      autogrow>
     

    </q-input>



    </div>

<div class="row justify-start">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Cancelar"
        class="q-mt-md"
        color="teal"
        @click="salvar"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>   
   
  </div>

</template>
<script>
import axios from 'axios';

export default {
  data () {

    return {
    time: '10:56',
      date: '2019/02/01',
      options: [],
      dador : '',
      obs : '',
      mensagem : '',

      lista : [],

        agendamento: {
        data_marcada: "2019/11/01",
        data_hoje: "",
        hora_marcada: "10:56",
        desc: "",
        
      },
    }
  }
,
methods: {

 
  
   salvar(){
//https://sanguemozapi.herokuapp.com/api/agendamento/
    axios.put(`https://sanguemozapi.herokuapp.com/api/agendamento/` , {

             codigo : this.dador.value,
             descricao : this.agendamento.desc,
             status: "camcelada"
       

                })
                .then(function (response) {
               
                   alert(response.data);

                })
                .catch(function (error) {

                });

  }
 
}


,

 mounted(){
    
  axios.get(`https://sanguemozapi.herokuapp.com/api/agendamento/`)
    .then(response => {
      this.lista  = response.data     
      console.log("--------------")

    })
    .catch(e => {
      this.errors.push(e)
    })
    
 }
,

  watch:{


lista(val){


if(val.length){
  this.options = this.lista.map(o => {
  return {
      label:  o.dador.nome,
      value:  o.dador.codigo
  }
  console.log(this.options);

})
}
}}
,


}




</script>