<template>
  <div class="q-pa-md">
	   <q-card class="my-card q-pa-md q-ma-xl" square >
      <q-item>
        <q-item-section avatar>
          <q-avatar size="38px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold text-body1">	{{dadores.nome  ||'Não Informado'}}</q-item-label>
          <q-item-label caption class="text-bold text-body2">	Grupo  : {{dadores.sangue.nome   ||'Não Informado'}}	 </q-item-label>
        </q-item-section>

      </q-item>
			<q-card-section>
				 <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="perm_identity"
        label="Dados Pessoais"
        caption="Todos"
      >
        <q-card>
          <q-card-section >
			  <div class="row">
				  	<div class="col">Telefone : {{dadores.telefone}}</div>
					<div class="col">Sexo : {{dadores.sexo}}</div>
					<div class="col">Email : {{dadores.email}}</div>
					<div class="col">Endereco : {{dadores.endereco}}</div>



			  </div>

			  <div class="row q-py-md">
				  	<div class="col">Tipo Documento : {{dadores.tipoDocumento}}</div>
					<div class="col">Numero Documento  : {{dadores.numeroDocumento}}</div>
					<div class="col">Data Nascimento : {{dadores.data_nasc}}</div>
					<div class="col">Grupo Sanguineo : {{dadores.sangue.nome}}</div>



			  </div>
         
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="calendar_today"
        label="Agendamentos"
      >
	   <q-timeline color="secondary" v-for="a in agendamentos" :key="a"  class="q-ma-md">
		   
		

      <q-timeline-entry
        title="Agendamento para Triagem"
        :subtitle="a.data_agendada"
		v-if="a.status=='marcada' "
      >

        <div>
						 Hora: {{a.hora}}
						</div>
						<div class="text">
								Situação : <span class="text-green-5">{{a.status}}</span>
						</div>

      </q-timeline-entry>
   

      <q-timeline-entry
        title="Agendamento Passado"
        color="orange"
			:subtitle="a.data_agendada"
		v-if="a.status=='realizada'"
      >

        <div>
						 Hora: {{a.hora}}
						</div>
						<div class="text">
								Situação : <span class="text-green-5">{{a.status}}</span>
						</div>
      </q-timeline-entry>


     
    </q-timeline>
	  
      </q-expansion-item>

      <q-expansion-item
        expand-separator
        icon="favorite"

        :label="label"
        
      >
	  <div  v-for="a in doacoes" :key="a">
 <q-card flat>
          <q-card-section>
		  <q-icon name="check_circle"  size="20px" color="green-5"/> <span class="q-pl-md">  Fez doacao  de <span class="q-pl-sm">  {{a.volume_coletado}}</span> <span class="q-px-sm">litros no dia</span> </span> <span class="q-pl-sm">  {{a.data_coletada}}</span>
          </q-card-section>
        </q-card>
	  </div>
       
      </q-expansion-item>

     
    </q-list>
			</q-card-section>
    </q-card>
   
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
import Dador from "../services/dadores";
import { QSpinnerFacebook } from "quasar";
import axios from "axios";

export default {
  computed: {
    donorId() {
      let id = this.$route.params.id;
      return id;
    }
  },

  methods: {
   
    listar() {
      this.$q.loading.show({
        delay: 400,
        message: "Por favor aguarde",
        sanitize: true
      });

      axios
        .get(`https://sanguemozapi.herokuapp.com/api/dadores/${this.donorId}`)
        .then(response => {
          this.dadores = response.data;
          this.$q.loading.hide({});
        })

        .catch(e => {
          this.$q.loading.hide({});
        });
	},


	
	 ListarDoacoes() {
		 
      this.$q.loading.show({
        delay: 400,
        message: "Por favor aguarde",
        sanitize: true
      });

      axios
        .get(`https://sanguemozapi.herokuapp.com/api/doacoes`)
        .then(response => {

			response.data.forEach((element,key) => {
				if(element.triagem.agendamento.dador.codigo == this.donorId) {
				this.doacoes.push(element)
				this.label = `Doaçoes( ${this.doacoes.length} )`

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
        				this.label = `Doaçoes( ${this.doacoes.length} )`

    },
	
	 Listaragendamentos() {
      this.$q.loading.show({
        delay: 400,
        message: "Por favor aguarde",
        sanitize: true
      });

      axios
        .get(`https://sanguemozapi.herokuapp.com/api/agendamento`)
        .then(response => {

			response.data.forEach((element,key) => {
				if(element.dador.codigo == this.donorId) {
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
    }
  },

  mounted() {
	this.listar();
	this.Listaragendamentos()
	this.ListarDoacoes()
  },

  data() {
    return {
     
	  dadores: [],
	  agendamentos: [],
	  doacoes:[],
	  label: '',
    

    
    };
  }
};
</script>
