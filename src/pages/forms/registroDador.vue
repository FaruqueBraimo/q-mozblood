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
      <div class="q-pa-md" style="max-width: 300px">

    <div class="q-gutter-md">
      

      <q-select
        filled
        v-model="dador.sexo"
        :options="options"
        stack-label
        label="Sexo"
        :display-value="`Selecionado: ${model ? model : 'nemhum'}`"
      >
        <template v-slot:append>
          <q-icon
            v-if="model !== null"
            class="cursor-pointer"
            name="clear"
            @click.stop="model = null"
          />
        </template>
        
      </q-select>
      
    </div>
    
  </div>

<!-- style="min-width: 250px; max-width: 300px ,top: 20px" -->
<q-input v-model="date" filled type="date" hint="Data de Nascimento" style="max-width: 300px" />
      
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
      <div class="q-pa-md">
   
    <div class="q-gutter-md" style="max-width: 300px">
      

      <q-select filled bottom-slots v-model="model" :options="options" label="Grupo Sanguineo" counter :dense="dense" :options-dense="denseOpts">
        <template v-slot:prepend>
          <q-icon name="place" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="model = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>

   

     

    
    </div>
  </div>
      </q-step>

      <q-step
        :name="3"
        title="Finalizar"
        icon="add_comment"
      >
       
      
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
 data () {
    return {

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
       model: "Selecione",
      options: [
        'Masculino', 'Feminino','Outro',
      ],
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
        alert('hello')
        
            

        this.submitting = false
      }, 3000)
    }

,
  salvar(){

    axios.post('https://sanguemozapi.herokuapp.com/api/dador/'  + 49, {

           
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
