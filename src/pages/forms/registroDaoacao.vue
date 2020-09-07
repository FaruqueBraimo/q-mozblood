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

  <q-input filled bottom-slots  v-model="nr" label="Codigo Bolsa" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>

        <template v-slot:hint>
        7775JA
        </template>
      </q-input>



<q-input filled bottom-slots  v-model="vulume" label="Volume coletado" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>

        <template v-slot:hint>
       0.5l
        </template>
      </q-input>

    


    <q-input filled v-model="obs" mask="" :rules="['']"  hint="Reação/Observação"  
      autogrow>
     

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
      nr: '',

      lista : [],
      vulume: ''
      
     
    }
  }
,
methods: {
   salvar(){
//https://sanguemozapi.herokuapp.com/api/agendamento/
    axios.post(`https://sanguemozapi.herokuapp.com/api/doacao/`  +  this.dador.value, {

           
             volume_coletado : this.vulume,
             obs :   this.obs,
             numero_bolsa : this.nr
             
                })
                .then(function (response) {
                     alert(response.data);

                })
                .catch(function (error) {
                    currentObj.output = error;
                });

  },
  showNotif () {
      this.$q.notify({
        message: 'Senha ou Usuario incorretoss',
        color: 'dark',
       

      })
    }
}


,

 mounted(){

  axios.get(`https://sanguemozapi.herokuapp.com/api/aptos/`)
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
      label:  o.agendamento.dador.nome,
      value:  o.codigo
  }
  console.log(this.options);

})
}
}}
,


}




</script>