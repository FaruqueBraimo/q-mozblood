<template>
  <q-page padding>
    <!-- content -->
  <div class="q-pa-md">

    <div class="row">
      <div class="col">
       <q-card style="max-width: 200px ">
        <q-card-section>
          <div class="text">Agendamentos</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
       <q-knob
      
      v-model="agendamento"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="teal-3"
     
    />
        </q-card-section>
      </q-card>
      </div>
      <div class="col">
        <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text">Litros Doados</div>
       
        </q-card-section>

  
        <q-separator inset />

        <q-card-section>
           <q-knob

      v-model="realizados"
      show-value
      size="50px"
      :thickness="0.22"
     color="red"
      track-color="red-3"
     
    />
        </q-card-section>
      </q-card>
      </div>

<div class="col">
      <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text justify-center">Doadores Atendidos</div>
         
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-knob
     
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="lime"
      track-color="lime-3"
     
     
    />
        </q-card-section>
      </q-card>
      </div>
      <div class="col">
       <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text ">Doadores reprovados</div>
          
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-knob
      
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="orange"
      track-color="orange-3"
    />
        </q-card-section>
      </q-card>
      </div>
    </div>

<div>

<q-space>  </q-space>

<p> . </p>


</div>
<div class="text-center text-bold text-body1"> Agendamentos de para Hoje</div>
  <q-separator spaced inset   />
  <div class="q-pa-md" v-for="a in agendamentos "  :key="a">
      <q-card class="my-card q-mx-xl" square bordered>
       
        <q-card-section>
         	   Tem um agendamento marcado com o dador  <span class="q-px-sm text-bold text-green-5"> {{a.dador.nome}} </span> as  {{a.hora}}
        </q-card-section>
      </q-card>

  </div>
  <q-separator spaced inset   />


    <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='month' yName='sales' name='Sales'> </e-series>
            </e-series-collection>
        </ejs-chart>


  </div>


  </q-page>
</template>

<style lang="sass">

  
</style>
<script>
import Vue from "vue";
import { ChartPlugin, LineSeries, Category } from "@syncfusion/ej2-vue-charts";
import axios from 'axios';
import { date } from 'quasar'

Vue.use(ChartPlugin);

export default {

 mounted() {
       
            this.welcome = localStorage.getItem('Zucula');

     this.listar();
     this.atendidos();
     this.Listaragendamentos()
  

    }
    ,



    methods: {


listar(){
  
       axios.get(`https://sanguemozapi.herokuapp.com/api/contagem`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.agendamento = response.data
      console.log(this.agendamento)
      console.log("--------------")
    })
    .catch(e => {
      this.errors.push(e)
    })
}
,

	 Listaragendamentos() {
      this.$q.loading.show({
        delay: 400,
        message: "Por favor aguarde",
        sanitize: true
      });

      axios
        .get(`https://sanguemozapi.herokuapp.com/api/agendamento`)
        .then(response => {
let timeStamp = Date.now()
let formattedString = date.formatDate(timeStamp, 'YYYY/MM/DD')

			response.data.forEach((element,key) => {
				if(element.data_agendada  === formattedString) {
				this.agendamentos.push(element)
				}
				else {
					console.log(element.codigo)
				}
			
				
			});
			
        
          this.$q.loading.hide({});
        })

        .catch(e => {
          this.$q.loading.hide({});
        });
   
  },

atendidos(){
  
       axios.get(`https://sanguemozapi.herokuapp.com/api/realizados`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.realizados = response.data
      console.log(this.realizados)
      console.log("--------------")
    })
    .catch(e => {
      this.errors.push(e)
    })
}

    }
,
  data() {
    return {

      agendamento : "",
      agendamentos: [],
      realizados : '',
      litros : '',
      reprovados : '',
      
      seriesData: [
            { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
            { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
            { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
            { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
            { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
            { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
              ],
        primaryXAxis: {
           valueType: 'Category'
        },
        primaryYAxis:{
            labelFormat: '{value}'
        },
      title: "Agendamentos por periodo"
    };
  },
  provide: {
    chart: [LineSeries, Category]
  }
};
</script>
<style>
 #container{
   height: 300px;
 }
</style>