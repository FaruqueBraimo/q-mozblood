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



  <q-input filled bottom-slots v-model="dadors.peso" label="Peso" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="airline_seat_recline_normal" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dadors.peso = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
        56
        </template>
      </q-input>

        <q-input filled bottom-slots v-model="dadors.altura" label="Altura" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="directions_walk" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dadors.altura = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         1.70
        </template>
      </q-input>


  



 <q-input filled bottom-slots v-model="dadors.pressao" label="Pressão Arterial" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="watch" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dadors.pressao = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         85
        </template>
      </q-input>
    
     <q-input filled bottom-slots v-model="dadors.temperatura" label="Temperatura" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="wb_sunny" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dadors.temperatura = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         25 C
        </template>
      </q-input>

    </div>
<div class="row justify-end">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Salvar"
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

      dadors:{
        
        temperatura: '',
        peso :  '',
        altura : '',
        pressao : '',
        observacoes: ''
      }
,
      lista : [],

        agendamento: {
        data_marcada: "2019/02/01",
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
    axios.post(`https://sanguemozapi.herokuapp.com/api/triagem/`  +  this.dador.value, {
  
    

          peso: this.dadors.peso,
          altura: this.dadors.altura,
          temperatura: this.dadors.temperatura,
          pressao_arterial : this.dadors.pressao ,

                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
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
      value:  o.codigo
  }
  console.log(this.options);

})
}
}}
,


}




</script>