<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      animated
      done-color="red-5"
      active-color="red"
      inactive-color="secondary"
    >
    
      <q-step
        :name="1"
        title="Dados Básicos"
        icon="user"
        :done="step > 1"
      >
   
      


       <div class="q-pa-lg">
    <div class="q-gutter-md row items-end">

       <q-input filled bottom-slots v-model="dador.nome" label="Nome" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.nome = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Judite
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.apelido" label="Apelido" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.apelido = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Judite
        </template>
      </q-input>

        <q-input filled bottom-slots v-model="dador.email" label="Email" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.email = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         judite123@gmail.com
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.telefone" label="Telefone" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="phone_enabled" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.telefone = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         846771216
        </template>
      </q-input>
    

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->
 <q-input filled v-model="date" mask="date" :rules="['date']" @click="$refs.qDateProxy.show()"  hint="Data de Nascimento"  style="width: 250px" >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date title= "Aniversario" v-model="date" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>


 <q-select
        filled
        v-model="dador.sexo"
        :options="sexo"
          stack-label
        label="Sexo"
        hint="Masculino"
        style="width: 250px"
      />

      <q-select
        filled
        v-model="dador.nacionalidade"
        :options="nacionalidade"
         stack-label
        label="Nacionalidade"
        hint="Angolana"
        style="width: 250px"
      />
   
      <q-select
        filled
        v-model="dador.provincia"
        :options="provincia"
          stack-label
        label="Provincia"
        hint="Luanda"
        style="width: 250px"
      />

      

    </div>

   
   
  </div>
      </q-step>

      <q-step
        :name="2"
        title="Dados intermediarios"
        caption="opcionais"
        icon="create_new_folder"
        :done="step > 2"
      >










   <div class="q-pa-lg">
    <div class="q-gutter-md row items-end">

       <q-input filled bottom-slots v-model="dador.nome" label="Nome de Pai" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.nome = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Mandjate Cossa
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.apelido" label="Nome de Mae" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.apelido = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         Rosita Cumbane
        </template>
      </q-input>


  <q-input filled bottom-slots v-model="dador.telefone" label="Telefone Parente" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="phone_enabled" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.telefone = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         846771216
        </template>
      </q-input>
    

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->



 <q-select
        filled
        v-model="dador.sexo"
        :options="sexo"
          stack-label
        label="grau parentesco"
        hint="Irmão"
        style="width: 250px"
      />

      <q-select
        filled
        v-model="model"
        :options="options"
         stack-label
        label="Fator RH"
        hint="RH+"
        style="width: 250px"
      />
   
      <q-select
        filled
        v-model="sangue_cod"
        :options="options"
          stack-label
        label="Grupo Sanguineo"
        hint="A+"
        style="width: 250px"
      />

    


    
    </div>
  </div>


  
      </q-step>

      <q-step
        :name="3"
        title="Finalizar"
        icon="add_comment"
      >
       

       




   <div class="q-pa-lg">
    <div class="q-gutter-md row items-end">


       <q-select
        filled
        v-model="dador.sexo"
        :options="sexo"
          stack-label
        label="Documento"
        hint="BI"
        style="width: 250px"
      />


       <q-input filled bottom-slots v-model="dador.nome" label="Doc Numero" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="dador.nome = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
        1250448822B
        </template>
      </q-input>


    

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->




    


    
    </div>
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


      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn     @click="$refs.stepper.next()" color="deep-orange" :label="step === 3 ? 'Finalizado' : 'Continuar'" />
          <q-btn v-if="step > 1" flat color="deep-orange" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  

 mounted(){

  axios.get(`https://sanguemozapi.herokuapp.com/api/sangue`)
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
}



}
,
 data () {
    return {
      lista: [],
      model: null,
      sangue_cod:null,
      options: [],
      sexo: ['Masculino', 'Feminino','Outro'],
      date: '2019/02/01',
      s:'',
      nacionalidade: ['Angola','Mocambique'],
      provincia : ['Nampula','Luanda']





,
     submitting: false,
      dador: {
        nome: "",
        endereco: "",
        sexo: "",
        telefone: "",
        email: "",
        numeroDeDoacoes: "",
        nomeMae: "",
        nomePai: "",
        numeroDocumento: "",
        tipoDocumento: "",
        nacionalidade: "",
        situacaoAptidao: "",
        provincia: "",
        fatorRH: "",
        apelido: ""
        
      },
     

      
     text: '',
     nome: '',
      ph: '',
      step: 1,

      dense: false
    }
  }

,

methods:{

  simulateSubmit () {
      this.submitting = true

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        
   

        this.submitting = false
      }, 3000)
    }

,
  salvar(){

    axios.post('https://sanguemozapi.herokuapp.com/api/dador/'  + this.sangue_cod.value, {

           
        nome: this.dador.nome,
        endereco: this.dador.endereco,
        sexo: this.dador.sexo,
        telefone:this.dador.telefone,
        email: this.dador.apelido
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });

  }
}

}
</script>
