<template>
  <div class="q-pa-md q-ma-md">
    

<q-dialog v-model="card">
      <q-card>

        <q-card-section>
          

         <div class="q-gutter-md row items-end">

       <q-input filled bottom-slots  label="Tipo" counter :dense="dense" v-model="data.nome">
        <template v-slot:prepend>
          <q-icon name="sentiment_satisfied_alt" />
        </template>
        <template v-slot:append>
          <q-icon name="close"    class="cursor-pointer" />
        </template>

        <template v-slot:hint>
         A
        </template>
      </q-input>
      


     
          </div>

              <q-space />



<div class="q-pt-md" style="max-width: 300px" >

    <q-input


      v-model="data.descricao"
      filled
      type="textarea"
      label="Descrição"

    >

      <template v-slot:hint>
          
       

        </template>
    </q-input>
  </div>
        
        </q-card-section>

      

        <q-separator />

        <q-card-actions  class="row justify-end">
          <q-btn  flat color="primary" v-close-popup @click="salvar()">Gravar</q-btn>
           
        </q-card-actions>
      </q-card>
    </q-dialog>







    <q-list bordered class="rounded-borders"   v-for="dat in data" :key="dat.codigo">
      <q-item-label header>Grupo</q-item-label>

      <q-item>
        <q-item-section avatar top>
          <q-icon name="fab fa-github" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{dat.nome}}</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-large">Descrição</span>
           
           
          </q-item-label >
          <q-item-label caption lines="1" >
             {{dat.descricao}}
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
           
          </q-item-label>
        </q-item-section>


        

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete"   text-color="deep-orange" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="create"  text-color="secondary"  />
          </div>
        </q-item-section>
      </q-item>


    </q-list>

    <div class="q-pt-md row justify-end">
     <q-btn
      v-for="(size, i) in sizes" :key="`btn_size_round_${size}`"
      round
      color="secondary"
      :size="size"
      :icon="icons[i]"
     @click="card = true" />
    </div>
  </div>
</template>


<style lang="sass">
.my-sticky-header-table

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th 
    background-color: #c1f4cd

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
  axios.get(`http://localhost:8085//api/sangue`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
      console.log(this.data)
      console.log("--------------")
    })
    .catch(e => {
      this.errors.push(e)
    })
    

 },

methods:{

   salvar(){
    axios.post('http://localhost:8085//api/sangue'  ,{

           
        nome:      this.data.nome,
        descricao: this.data.descricao,
     
                })
                .then(function (response) {
                   
                })
                .catch(function (error) {
                });

  }
  ,
  listar(){

    axios.get('http://localhost:8085//api/sangue')
                .then(function (response) {
                    this.grupo = response.data;
                    console.log(this.grupo)


})
                .catch(function (error) {
                });

  }


}
,


  data () {
    


    return {

         filter: '',
         card: false,
          sizes: ['lg'],
          icons: [
        
        'add'
      ],

       grupo:[],
    
      data: [
        {
          nome: '',
          descricao: ''
         
        }
      
       
      ]
    }
  }
}



</script>