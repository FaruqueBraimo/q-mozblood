<template>
  <div class="q-pa-lg q-ma-lg">


    <q-table
      title="Lista Triagens"
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
          <q-td key="agendamento.dador.nome" :props="props">
            {{ props.row.agendamento.dador.nome }}
          
          </q-td>
          <q-td key="pressao_arterial" :props="props">
            {{ props.row.pressao_arterial }}
          
          </q-td>
          <q-td key="peso" :props="props">
            <div class="text-pre-wrap">{{ props.row.peso }}</div>
           
          </q-td>
          <q-td key="altura" :props="props">
            {{ props.row.altura }}
          
          </q-td>
          <q-td key="temperatura" :props="props">{{ props.row.temperatura }}</q-td>
          <q-td key="Observacoes" :props="props">{{ props.row.Observacoes }}</q-td>
          <q-td key="Data_triagem" :props="props">{{ props.row.Data_triagem }}</q-td>
          <q-td key="status" :props="props">{{ props.row.status }}</q-td>

          <q-td key="iron" :props="props">

      <q-btn-group >
      <q-btn icon="delete"   text-color="red-5"  style="width: 12px" v-model="props.row.iron">

        <q-tooltip 
        content-class="bg-red-5" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Remover</q-tooltip> </q-btn>
      
      
      <q-btn icon="edit"   text-color="secondary"  style="width: 12px" v-model="props.row.iron" >
        <q-tooltip 
        content-class="bg-secondary" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Editar</q-tooltip> </q-btn>
        
      <q-btn  icon="explore_off"  text-color="deep-orange" style="width: 13px"  v-model="props.row.codigo" @click="getSelectedString (props.row.codigo)" >



     <q-tooltip 
        content-class="bg-deep-orange" :offset="[10, 10]"       
         transition-show="rotate"
          transition-hide="rotate"
         >
        Marcar Inaptidao</q-tooltip> </q-btn>
      
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

  axios.get(`https://sanguemozapi.herokuapp.com/api/triagem/`)
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


methods:{





getSelectedString (codigo) {
   this.$q.dialog({
        dark: true,
        message: 'Marcar Inaptidao?',
        cancel: true,
        title: 'Confirmacão',
        persistent: true
      }).onOk(() => {
        
          this.ina(codigo);

        

      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
   },
ina(cod){
  axios.put('https://sanguemozapi.herokuapp.com/api/triagem'  ,{

        codigo : cod,   
        status : "inapto"

     
                })
                .then(function (response) {
                   

                   
                })
                .catch(function (error) {
                });
  
          
  this.showNotif(" Inaptidao registada");
  
 },

},

  data () {
    return {

         filter: '',



      columns: [
        {
          
          name: 'agendamento.dador.nome',
          required: true,
          label: 'Dador',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true,
          edit : false
          
        },
        { name: 'pressao_arterial', align: 'center', label: 'Pressão arterial', field: 'pressao_arterial', sortable: true , },
        { name: 'peso', label: 'Peso (kg)', field: 'peso', sortable: true, style: 'width: 10px' },
        { name: 'altura', label: 'Altura, (m)', field: 'altura' },
        { name: 'temperatura', label: 'Temperatura', field: 'c', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
       { name: 'Observacoes', label: 'Observacoes', field: 'Observacoes', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
       { name: 'Data_triagem', label: 'Data da Triagem', field: 'Data_triagem' },
       { name: 'status', label: 'status', field: 'status' , sortable: true },
        { name: 'iron',align: 'center', label: 'Accão', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
      ]
    }
  }
}



</script>