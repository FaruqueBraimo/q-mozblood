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
  
      <q-breadcrumbs-el label="Doacao" icon="navigation" />
    </q-breadcrumbs>


    <q-space> </q-space>

   <p> ... </p>



    <q-table
      title="Lista de Doaçoes"
      :data="data"
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

   <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>



      <template v-slot:body="props">
        <q-tr :props="props">
          
          <q-td key="triagem.agendamento.dador.nome" :props="props">
            {{ props.row.triagem.agendamento.dador.nome}}
           
          </q-td>
          <q-td key="data_coletada" :props="props">
            {{ props.row.data_coletada }}
           
          </q-td>
          <q-td key="hora_coletada" :props="props">
            {{ props.row.hora_coletada }}
           
          </q-td>
        
<q-td key="volume_coletado" :props="props">
            {{ props.row.volume_coletado }}
           
          </q-td>
          
         <q-td key="obs" :props="props">
            {{ props.row.obs }}
           
          </q-td>
          
        

          <q-td key="iron" :props="props">

      <q-btn-group >
      <q-btn icon="delete"   text-color="red-5"  style="width: 12px" v-model="props.row.iron">

        <q-tooltip 
        content-class="bg-red-5" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Remover</q-tooltip> </q-btn>
      
      
      <q-btn icon="edit"   text-color="secondary"  style="width: 12px" v-model="props.row.iron">
        <q-tooltip 
        content-class="bg-secondary" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Editar</q-tooltip> </q-btn>
        
      <q-btn  icon="visibility"  text-color="deep-orange" style="width: 13px"  v-model="props.row.iron">



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
    background-color: #f5f5dc

  thead tr:first-child th
    position: sticky
    top: 0
    opacity: 1
    z-index: 1
</style>





<script>


import axios from 'axios';

export default {



mounted()  { 
        //http://localhost:8085/api || https://sanguemozapi.herokuapp.com/api/

  axios.get(`https://sanguemozapi.herokuapp.com/api/doacoes/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
      console.log(response.data
      )
    })
    .catch(e => {
      this.errors.push(e)
    })
    

 },



  data () {
    return {

         filter: '',

         data:[],



      columns: [

,
         { name: 'triagem.agendamento.dador.nome', align: 'left', label: 'Dador', field: 'triagem.agendamento.dador.nome' },

        { name: 'data_coletada', align: 'center', label: 'Data Coletada', field: 'data_coletada', sortable: true , },
        { name: 'hora_coletada', label: 'Hora Coletada', field: 'hora_coletada' },
        { name: 'volume_coletado', label: 'Volume Coletado', field: 'volume_coletado' },

        { name: 'obs', label: 'Observação/Reação', field: 'obs' },


        { name: 'iron',align: 'center', label: 'Accão', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
    }
  }
}



</script>