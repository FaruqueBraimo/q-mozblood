<template>
  <div class="q-pa-lg q-ma-lg">
     <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>

      <q-breadcrumbs-el label="Inicio" icon="home" to="dash" />
  
      <q-breadcrumbs-el label="Dadores" icon="navigation" />
    </q-breadcrumbs>


    <q-space> </q-space>

   <p> ... </p>

    <q-table
      title="Lista de Dadores"
      :data="dadores"
      :columns="columns"
      row-key="name"
      binary-state-sort
       :filter="filter"
      class="my-sticky-header-table"

    >

   <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>



      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nome" :props="props">
            {{ props.row.nome }}
            <q-popup-edit v-model="props.row.name">
              <q-input v-model="props.row.name" dense autofocus counter />
            </q-popup-edit>
          </q-td>
          <q-td key="sexo" :props="props">
            {{ props.row.sexo }}
            <q-popup-edit v-model="props.row.sexo" title="Update calories" buttons>
            </q-popup-edit>
          </q-td>
          <q-td key="endereco" :props="props">
            <div class="text-pre-wrap">{{ props.row.endereco }}</div>
            <q-popup-edit v-model="props.row.fat">
              <q-input type="textarea" v-model="props.row.endereco" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
            <q-popup-edit v-model="props.row.email" title="Update carbs" buttons persistent>
              <q-input type="number" v-model="props.row.email" dense autofocus hint="Use buttons to close" />
            </q-popup-edit>
          </q-td>
          <q-td key="telefone" :props="props">{{ props.row.telefone }}</q-td>
          <q-td key="data_nasc" :props="props">{{ props.row.data_nasc }}</q-td>
          <q-td key="sangue.nome" :props="props">{{ props.row.sangue.nome }}</q-td>

          <q-td key="iron" :props="props">

      <q-btn-group >
      <q-btn icon="delete"   text-color="red-5"  style="width: 12px" v-model="props.row.codigo" @click="getSelectedString (props.row.codigo)" >

        <q-tooltip 
        content-class="bg-red-5" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Remover</q-tooltip> </q-btn>
      
      
      <q-btn icon="edit"   text-color="secondary"  style="width: 12px"  v-model="props.row.codigo">
        <q-tooltip 
        content-class="bg-secondary" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Editar</q-tooltip> </q-btn>
        
      <q-btn  icon="visibility"  text-color="deep-orange" style="width: 13px"  v-model="props.row.codigo">



     <q-tooltip 
        content-class="bg-deep-orange" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Ver detahes</q-tooltip> </q-btn>
      
    </q-btn-group>

             
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>


<style lang="sass">
.my-sticky-header-table

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th 
    background-color:  #f5f5dc

  thead tr:first-child th
    position: sticky
    top: 0
    opacity: 1
    z-index: 1
</style>





<script>


import Dador from  '../services/dadores'
import { QSpinnerFacebook } from 'quasar'
import axios from 'axios';

export default {

 methods:{
  getSelectedString (codigo) {
   this.$q.dialog({
        dark: true,
        message: 'Deseja apagar?',
        cancel: true,
        title: 'Confirmacão',
        persistent: true
      }).onOk(() => {
        
          this.remover(codigo);

        

      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
   },

       remover(codigo){


    
    axios.delete('https://sanguemozapi.herokuapp.com/api/dador/'  + codigo )
    
    .then(response => this.selected.splice(index,1) )

    


    .catch(e => {
    
    })
         this.showNotif();
          this.listar();
          


 }
,
showNotif () {
      this.$q.notify({
        message: 'Dador Apagado',
        color: 'dark'
        
       
      })
    },

listar(){
   this.$q.loading.show({
   delay: 400 ,
   message: 'Por favor aguarde',
   sanitize: true
})
     Dador.listar() 
    .then(response => {
     this.dadores = response.data;
    this.$q.loading.hide(  {
    })
    
     

    })
     .catch(e => {
     this.$q.loading.hide(  {
    })
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
          mensagem : '',  
            


      columns: [
        {
          
          name: 'nome',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
          
        },
        { name: 'sexo', align: 'center', label: 'Sexo',  field: 'sexo', sortable: true },
        { name: 'endereco', label: 'Endereco', field: 'endereco', sortable: true },
        { name: 'email', label: 'Email',  field: 'email' , align: 'center',},
        { name: 'telefone', label: 'Telefone', field: 'telefone' },
        { name: 'data_nasc', label: 'Nascimento',  field: 'data_nasc' },
        { name: 'sangue.nome', label: 'Grupo Sanguineo', field: 'sangue.nome', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron',align: 'center', label: 'Accão', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
     
    }
  }
}



</script>