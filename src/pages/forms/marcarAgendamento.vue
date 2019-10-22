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


    

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->
   <q-input filled v-model="agendamento.data_marcada" mask="date" :rules="['date']" @click="$refs.qDateProxy.show()"  hint="Data"  style="width: 250px" >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date title= "Aniversario" v-model="agendamento.data_marcada" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>

    <q-input filled v-model="agendamento.hora_marcada" mask="time" :rules="['time']"  hint="Hora">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy :breakpoint="800">
             <q-time
                v-model="agendamento.hora_marcada"
              />
          </q-popup-proxy>
        </q-icon>
      </template>

    </q-input>


    <q-input filled v-model="lista.desc" mask="" :rules="['']"  hint="Observação"  
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
      options: [''],
      dador : '',
      obs : '',

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
    axios.post(`https://sanguemozapi.herokuapp.com/api/agendamento/`  +  this.dador.value, {

           
             descricao : this.lista.desc,
             data_agendada : this.agendamento.data_marcada,
             hora: this.agendamento.hora_marcada,
             
       
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

  axios.get(`https://sanguemozapi.herokuapp.com/api/dadores`)
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
      label:  o.nome,
      value:  o.codigo
  }
  console.log(this.options);

})
}
}}
,


}




</script>