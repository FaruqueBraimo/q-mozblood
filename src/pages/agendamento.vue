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
  
      <q-breadcrumbs-el label="Agendamento" icon="navigation" />
    </q-breadcrumbs>


    <q-space> </q-space>

   <p> ... </p>


   


    <q-table
      title="Lista de Agendamentos"
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



      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="dador.nome" :props="props">
            {{ props.row.dador.nome }}
         
          </q-td>
          <q-td key="data_agendada" :props="props">
            {{ props.row.data_agendada }}
           
          </q-td>
          <q-td key="data" :props="props">
            {{ props.row.data }}
           
          </q-td>
          <q-td key="hora" :props="props">
            {{ props.row.hora }}
           
          </q-td>
        

          
         <q-td key="descricao" :props="props">
            {{ props.row.descricao }}
           
          </q-td>
        
         
         <q-td key="status" :props="props">
            {{ props.row.status }}
           
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

  axios.get(`https://sanguemozapi.herokuapp.com/api/agendamento/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
      console.log(response.data
      )
      console.log("--------------")
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
        {
          
          name: 'dador.nome',
          required: true,
          label: 'Dador',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
          
        },
        { name: 'data_agendada', align: 'center', label: 'Data  Agendanda', field: 'data_agendada', sortable: true , },
        { name: 'data', label: 'Data', field: 'data', sortable: true, style: 'width: 10px' },
        { name: 'hora', label: 'Hora de Agendamento', field: 'hora' },
        { name: 'descricao', label: 'descricao', field: 'descricao' },
       { name: 'status', label: 'Estado', field: 'status' },

        { name: 'iron',align: 'center', label: 'Accão', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
    }
  }
}



</script>