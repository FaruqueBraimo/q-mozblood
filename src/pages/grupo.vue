<template>
  <div class="q-pa-md q-ma-md">
    <q-dialog v-model="card">
      <q-card>
        <q-card-section>
          <div class="q-gutter-md row items-end">
            <q-input
              filled
              bottom-slots
              label="Tipo"
              v-model="nome"
            >
              <template v-slot:prepend>
                <q-icon name="sentiment_satisfied_alt" />
              </template>
              <template v-slot:append>
                <q-icon name="close" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                A
              </template>
            </q-input>
          </div>

          <q-space />

          <div class="q-pt-md" style="max-width: 300px">
            <q-input
              v-model="descricao"
              filled
              type="textarea"
              label="Descrição"
            >
              <template v-slot:hint> </template>
            </q-input>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="row justify-end">
          <q-btn flat color="primary" v-close-popup @click="salvar()"
            >Registar</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="edit">
      <q-card>
        <q-card-section>
          <div class="q-gutter-md row items-end">
            <q-input
              filled
              bottom-slots
              label="Tipo"
              counter
              v-model="nome"
            >
              <template v-slot:prepend>
                <q-icon name="sentiment_satisfied_alt" />
              </template>
              <template v-slot:append>
                <q-icon name="close" class="cursor-pointer" />
              </template>

              <template v-slot:hint>
                A
              </template>
            </q-input>
          </div>

          <q-space />

          <div class="q-pt-md" style="max-width: 300px">
            <q-input
              v-model="descricao"
              filled
              type="textarea"
              label="Descrição"
            >
              <template v-slot:hint> </template>
            </q-input>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="row justify-end">
          <q-btn flat color="primary" v-close-popup @click="editar()"
            >Alterar</q-btn
          >
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el label="Inicio" icon="home" to="dash" />

      <q-breadcrumbs-el label="Grupo Sanguineo" icon="navigation" />
    </q-breadcrumbs>


<!-- 
    <q-list
      bordered
      class="rounded-borders"
      v-model="data"
      v-for="dat in getData"
      :key="dat.codigo"
    >
      <q-item-label header>Grupo</q-item-label>

      <q-item>
        <q-item-section avatar top>
          <q-icon name="fab fa-github" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{ dat.nome }}</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-large">Descrição</span>
          </q-item-label>
          <q-item-label caption lines="1">
            {{ dat.descricao }}
          </q-item-label>
          <q-item-label
            lines="1"
            class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
          >
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="delete"
              text-color="deep-orange"
              @click="getSelectedString(dat.codigo)"
            />
            <q-btn
              class="gt-xs"
              size="12px"
              flat
              dense
              round
              icon="create"
              text-color="secondary"
              @click="
                (edit = true),
                  (nome = dat.nome),
                  (descricao = dat.descricao),
                  (key = dat.codigo)
              "
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list> -->
        <div class="row q-mb-xl justify-left	">
          <div class=" col-4 q-pa-sm  " v-for="dat in getData"    :key="dat.nome"
     >
      <groupComponent
       :group ='Object.assign({id: index},dat)'
       @updategroup='updateGroup = $event'
       @remover='remover'
   
     />
             
          </div>
        </div>

        		<q-card flat class="my-card bg-grey-1  q-pa-lg fixed-center q-ma-lg" v-if="data.length == 0">
				<q-card-actions vertical align="center">
					<div class="text-green text-bold text-h6">Sem Grupos</div>
          <div class="text-green  text-body">Toque no botão abaixo, para adicionar</div>

				</q-card-actions>
			</q-card>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="primary"    @click="card = true"/>
          </q-page-sticky>


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
import axios from "axios";
import groupComponent from "../components/groupComponent";

export default {

   data() {
    return {
      filter: "",
      mensagem: "",
      card: false,
      edit: false,
      sizes: ["lg"],
      icons: ["add"],
      nome: "",
      descricao: "",
      grupo: [],
    updateGroup:{},
      data: []
    };
  
},
  mounted() {
    // axios
    //   .get(`https://sanguemozapi.herokuapp.com/api/sangue`)
    //   .then(response => {
    //     // JSON responses are automatically parsed.
    //     this.data = response.data;
    //   })
    //   .catch(e => {
    //     this.errors.push(e);
    //   });
  },

  computed: {
    getData() {

       
       axios
        .get(`https://sanguemozapi.herokuapp.com/api/sangue`)
        .then(response => {
          this.data = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });




          return this.data;
    }

    
  },

  methods: {
    listar() {
      // axios
      //   .get(`https://sanguemozapi.herokuapp.com/api/sangue`)
      //   .then(response => {
      //     // JSON responses are automatically parsed.
      //     this.data = response.data;
      //   })
      //   .catch(e => {
      //     this.errors.push(e);
      //   });
    },

    salvar() {
      axios
        .post("https://sanguemozapi.herokuapp.com/api/sangue", {
          nome: this.nome,
          descricao: this.descricao
        })
        .then(function(response) {})
        .catch(function(error) {});
      this.showNotif("Gravado com sucesso");
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
      axios
        .put("https://sanguemozapi.herokuapp.com/api/sangue", {
          codigo: this.updateGroup.codigo,
          nome: this.nome,
          descricao: this.descricao

          
        })
        .then(function(response) {
          this.data = [];
          this.listar();
        })
        .catch(function(error) {});
      this.showNotif("Editado com sucesso");
    },



    remover(codigo) {

         this.$q
					.dialog({
						title: 'Confirme',
						message: `Tem certeza que deseja apagar a categoria ?`,
						ok: 'Sim',
						cancel: true,
						cancel: 'Não',
						persistent: true
					})
					.onOk(() => {

     axios
        .delete("https://sanguemozapi.herokuapp.com/api/sangue/" + codigo)
        .then(response => this.data.splice(index, 1))
      this.showNotif("Removido com sucesso")
        .catch(e => {});

						
					});
     
    
    },

    listar() {
      // axios
      //   .get("https://sanguemozapi.herokuapp.com/api/sangue")
      //   .then(function(response) {
      //     this.grupo = response.data;
      //   })
      //   .catch(function(error) {});
    }
  },

components : {
  groupComponent
},




		watch: {
			updateGroup(val) {
          this.edit = true
          this.nome = this.updateGroup.nome;
          this.descricao = this.updateGroup.descricao 
      }
		}
 
};
</script>
