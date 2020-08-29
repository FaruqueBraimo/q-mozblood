<template>
  <div class="q-pa-md">

<div class="flex fixed flex-center">
		<div class="row justify-center ">


			<p class="text-h6 text-center q-pb-md text-center ">
				Preencha os campos abaixo para registar um Doador
			</p>


			<q-card square bordered>
				<q-tabs
					v-model="tab"
					dense
					inline-label
					class="text-grey q-pa-sm"
					active-color="primary"
					indicator-color="primary"
					align="justify"
					narrow-indicator
				>
					<q-tab name="mails" icon="info" label="Detalhes" />
					<q-tab name="alarms" icon="attach_money" label=" Complementar" />
				</q-tabs>

				<q-separator />

				<q-tab-panels v-model="tab" animated>
					<q-tab-panel name="mails">
						<div class="row q-px-sm">
							<div class="col-6 ">
                 <q-input square
									filled
									dense
                   v-model="dador.apelido" label="Apelido" >
        
        <template v-slot:append>
          <q-icon name="close" @click="dador.apelido = ''" class="cursor-pointer" />
        </template>

       
      </q-input>
							
							</div>

							<div class="col-6 q-px-sm">
								<q-input
									square
									filled
									dense
									label="Primeiro Nome "
									v-model="dador.nome"
									:rules="[
										val =>
											(val !== null && val !== '') ||
											'Por favor insira o nome'
									]"
								/>
							</div>

							<div class="col-6 q-py-sm">
								<q-select
									dense
									label="Genero"
									square
									filled
									 v-model="dador.sexo"
        :options="sexo"
									:rules="[
										val =>
											(val !== null && val !== '') ||
											'Por favor insira o genero'
									]"
								/>
							</div>

							<div class="col-6 q-pa-sm">
								<q-select
									square
									dense
									filled
									 v-model="sangue_cod"
        :options="options"
          stack-label
        label="Grupo Sanguineo"
									:rules="[
										val =>
											(val !== null && val !== '') ||
											'Por favor insira o fornecedor'
									]"
								>
		<template v-slot:append>
          <q-btn round dense flat icon="add"  />
        </template>
      </q-select>
								</q-select>
							</div>

							<div class="col-6 q-py-sm">
								<q-input
									square
									filled
									dense
                  type="email"
                v-model="dador.email" label="Email"
									lazy-rules
									:rules="[
										val =>
											(val !== null && val !== '') ||
											'Por favor insira o telefone'
									]"
								/>
							</div>

							<div class="col-6 q-pa-sm">
<q-input filled v-model="dador.nasc" mask="date" dense :rules="['date']" @click="$refs.qDateProxy.show()"  hint="Data de Nascimento"   >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date title= "Aniversario" v-model="dador.nasc" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
								
							</div>

							
						</div>
					</q-tab-panel>

					<q-tab-panel name="alarms">
						<div class="row q-px-sm">
							<div class="col-6 ">
								<q-input
									square
									filled
									dense
									type="number"
									v-model="dador.telefone" label="Telefone"

								/>
							</div>

							<div class="col-6 q-px-sm">
							 <q-select
               square
               dense
        filled
        v-model="dador.tipoDocumento"
        :options="documento"
         
        label="Documento"
      />
							</div>

							<div class="col-6 q-py-sm">
								<q-input
									square
									filled
								v-model="dador.numeroDocumento" label="Número do Doc"
									dense
									
								/>
							</div>

							<div class="col-6 q-pa-sm">
								<q-input
									square
									filled
									label="Endereco"
									v-model="dador.endereco"
									dense
									
								/>
							</div>

							<div class="col-6 q-py-sm">
								<q-input
									square
									filled
									disable
									dense
									v-model="profit"
								/>
							</div>

							<div class="col-6 bg-white q-pa-sm">
								<q-input
                class="bg-white"
									square
									filled
									disable
									dense
									v-model="profitMargin"
								/>
							</div>
						</div>
					</q-tab-panel>

				
				</q-tab-panels>

				<div class="row text-center">
					<div class="col-6 q-pa-sm">
						<q-btn
							label= 'Registar'
							
							size="md"
							@click="salvar"
							type="submit"
							color="red-5"
						
							unelevated
							class="full-width "
						/>
					</div>

					<div class="col-6 q-pa-sm">
						<q-btn
							label="Limpar"
							size="md"
							@click="onReset"
							type="reset"
							color="primary"
							unelevated
							class="full-width "
						/>
					</div>
				</div>
			</q-card>
			<div>  </div>
		</div>
	</div>


















  </div>
</template>

<script>
import axios from 'axios';
export default {
  

 mounted(){

  axios.get(`https://sanguemozapi.herokuapp.com/api/sangue`)
    .then(response => {
      this.lista  = response.data     

    })
    .catch(e => {
      this.errors.push(e)
    })



  this.paises();

 }
,


watch:{


lista(val){


if(val.length){
  this.cPaises = this.pais.map(o => {
  return {
      label:  o.name,
      value:  o.name,
  }
  console.log(o.name);

})

this.options = this.lista.map(o => {
  return {
      label:  o.nome,
      value:  o.codigo
  }
  console.log(this.options);

})
}
}

}







,
 data () {
    return {
      lista: [],
      pais : [],
      model: null,
      sangue_cod:null,
       currentObj: "",
      options: [],
      cPaises : [],
      sexo: ['Masculino', 'Feminino','Outro'],
      grau: ['Irmão(a)', 'Mãe','Pai','Outro'],
      documento: ['BI','Passaporte','DIRE','Cartão de Eleitor','Outro'],
      date: '2019/02/01',
      s:'',
      rh: ['RH+','RH-'],
      nacionalidade: ['Moçambique','Outro'],
      provincia : ['Maputo','Gaza','Inhambane','Manica','Sofala','Tete','Nampula','Zambezia','Niassa','Cabo Delgado', 'Outro']
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
        apelido: "",
        grau: "",
        nasc: ""
        
       
        
      },
      optionalcategory: [],
				Optionalprovider: [{ label: 'Nenhum' }],
				utility: ['Venda', 'Uso Interno'],
				nasc: '',
				disable: true,
				category: '',
				price: '',
				utility: '',
				quantity: '',
				code: '',
				expires: '',
				profitMargin: '',
				price_buy: 0,
				price_payd: 0,
				iva: '17%',
				discount_iva: 0,
				provider: '',
				profit: '',
				qtdBalcony: '',
				qtdWarehouse: '',
				stockBreak: '',
				description: '',
				reference: '',
				subCategory: '',
				referenceStatus: '',
        referenceStatusUpdate:'',
        date: 'AAAA/MM/DD',
				tab: 'mails',
				refCode:"",
				optionalcategory: [],
				Optionalprovider: [{ label: 'Nenhum' }],
				utility: ['Venda', 'Uso Interno'],
				name: '',
				disable: true,
     
  
      
     text: '',
     nome: '',
      ph: '',
      step: 1,

      dense: false
    }
  }

,

methods:{

paises (){



 axios.get(`https://restcountries.eu/rest/v2/all`)
    .then(response => {
      this.pais  = response.data     

    })
    .catch(e => {
      this.errors.push(e)
    })

 },



 


showNotif(mensagem) {
      this.$q.notify({ 
        position: 'top-right',
        type: 'positive',
        color:      'green',
        message:    mensagem,
        actions: [{ icon: 'close', color: 'white' }]
      });
    },




  editar() {

 axios.put('http://localhost:8086/api/dador/'  + this.sangue_cod.value, {

           
        nome: this.dador.nome,
        endereco: this.dador.endereco,
        sexo: this.dador.sexo,
        telefone:this.dador.telefone,
        email: this.dador.email,
        data_nasc: this.dador.nasc,
        fatorRH: this.dador.fatorRH,
        // nacionalidade: this.dador.nacionalidade,
        nomeMae: this.dador.nomeMae,
        nomePai: this.dador.nomePai,
        numeroDeDoacoes: "",
        numeroDocumento: this.dador.numeroDocumento,
        provincia: this.dador.provincia,
        situacaoAptidao: "",
        tipoDocumento: this.dador.tipoDocumento,


                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
 


  }

,
showNotif () {
      this.$q.notify({
        message: this.currentObj,
        color: 'dark',
       

      })
    },
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
    }

,


	onReset() {
				this.name = '';
				this.category = '';
				this.provider = '';
				this.quantity = '';
				this.expires = '';
				this.price_buy = '';
				this.price_payd = '';
				this.description = '';
				this.iva = '';
				this.discount_iva = 0;
				this.qtdBalcony = ' ';
				this.qtdWarehouse = '';
				this.stockBreak = '';
				this.code = '';
				this.profit = '';
				this.profitMargin = '';
				this.reference = '';
				this.subCategory = '';
      },
      	onSubmit() {},
      
  salvar(){

    axios.post('https://sanguemozapi.herokuapp.com/api/dador/'  + this.sangue_cod.value, {

           
        nome: this.dador.nome,
        endereco: this.dador.endereco,
        sexo: this.dador.sexo,
        telefone:this.dador.telefone,
        email: this.dador.email,
        data_nasc: this.dador.nasc,
        fatorRH: this.dador.fatorRH,
        // nacionalidade: this.dador.nacionalidade,
        nomeMae: this.dador.nomeMae,
        nomePai: this.dador.nomePai,
        numeroDeDoacoes: "",
        numeroDocumento: this.dador.numeroDocumento,
        provincia: this.dador.provincia,
        situacaoAptidao: "",
        tipoDocumento: this.dador.tipoDocumento,

                })
                .then(function (response) {
                     alert(response.data);
                 
                })
                .catch(function (error) {
                });

  }
}

}
</script>
