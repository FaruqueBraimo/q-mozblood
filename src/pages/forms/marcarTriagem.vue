<template>
    
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
</template>

<script>
export default {
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

    },

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
