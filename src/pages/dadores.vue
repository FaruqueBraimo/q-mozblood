<template>
  <q-page padding>
<div class="q-pa-md" > 


        
   <ul >

    <li v-for="dador of selected" :key="dador.codigo">
      <p><strong> {{dador}}  </strong></p>
     
    </li>
  
  </ul>


    <q-table
       title="Dadores"
      :data="dadores"
      :columns="columns"
      row-key="nome"
      
      :filter="filter"
      selection="single"
      :selected.sync="selected"
      :selected-rows-label="getSelectedString"

    >

        <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Pesquisar">
        <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>






      
    </q-table>


  



</div>
  </q-page>
</template>

<script>

import Dador from  '../services/dadores'
import { QSpinnerFacebook } from 'quasar'
import axios from 'axios';

export default {


  methods:{
  getSelectedString () {
   this.$q.dialog({
        dark: true,
        message: 'Deseja apagar?',
        cancel: true,
        title: 'Confirmacão',
        persistent: true
      }).onOk(() => {
        
          this.remover();

        

      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
   }

,


   remover(){



    for(let v of this.selected){
    
   axios.delete('http://localhost:8085/api/dador/'  + v.codigo )
    .then(response => this.selected.splice(index,1) )
    .catch(e => {
     
    })
   

   

  }


 }


,
listar(){
   this.$q.loading.show({
   delay: 400 ,
   message: 'Por favor aguarde',
   sanitize: true
})
     Dador.listar() 
    .then(response => {
     this.dadores = response.data;
    this.$q.loading.hide()
    

    })
}

  },



 mounted()  { 
    
    this.listar();
 

 },

 data () {

    return {
  filter: '',
  selected: [],

   dadores:[],
          


      columns: [
        {
          name: 'nome',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.nome,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'sexo', align: 'center', label: 'Sexo', field: 'sexo', sortable: true },
        { name: 'endereco', label: 'Endereco', field: 'endereco', sortable: true },
        { name: 'Email', label: 'Email', field: 'email' , align: 'center',},
        { name: 'telefone', label: 'Telefone', field: 'telefone' },
        { name: 'nascimento', label: 'Nascimento', field: 'sodium' },
        { name: 'grupo', label: 'Grupo Sanguineo', field: 'sangue', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'acao', label: 'Accao', field: 'iron' }
      ],
     
    }
  },


}
</script>



}
</script>
