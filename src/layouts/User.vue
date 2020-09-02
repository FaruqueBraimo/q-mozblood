<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="brand">

        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          <q-icon name="favorite" />
          SGBS {{id}}
        </q-toolbar-title>
     <q-space />


    


     <q-btn-dropdown
      icon="person_outline"
      color="red-5"
    >
      <div class="row no-wrap q-pa-md">

        <div class="column items-center">
        <q-chip square>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
         {{getUserAuth.name}}
      </q-chip>

      
       <p class="text-white"> ... </p>

        <q-btn color="red-5" @click="sair()" label="Terminar Sessão"/>
        </div>
      </div>

    </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="brand"
    >
      <q-list bordered class="rounded-borders">
        <q-item-label header class="caption">Menu</q-item-label>
        <q-item clickable exact to="/menu">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section > 
            <q-item-label text-color="white" > Inicio</q-item-label>
          </q-item-section>
        </q-item>


      <q-item  exact to="/dador-reg"  :disable="conf">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Torne-se Dador</q-item-label>
          </q-item-section>
        </q-item>
  

          
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


<style lang="sass">

.brand

    background-color:(#D11E19)
    color: white
    font-size : 16px;
</style>

<style lang="sass">

.caption
    pading-top: 2px;
    color: white
    font-size : 11px;
 

</style>

<script>
import axios from 'axios';
import agendamentoVue from '../pages/agendamento.vue';
import { mapGetters, mapState ,mapActions} from 'vuex';
import { showErrorMessage } from '../functions/handle-error-messages';

export default {
  name: 'MyLayout',
  props: ['msg'],

  computed: {
			...mapState('auth', ['users', 'userAuth',]),
      ...mapGetters('auth', ['getUserName', 'getUserAuth']),
      			...mapState('role', ['roles']),

			
		
		},

  data () {
    return {
      leftDrawerOpen: false,
       welcome: '',
       agendamento : '',
       conf: false
    }
  },
   mounted() {

        if(this.getUserAuth.online) {
          				this.$router.push('/userdash');

        }



if (!this.getUserAuth) {

				this.$router.push('/');
				showErrorMessage('Sem permissão, por favor autentique-se');
      }
      
      if (this.getUserAuth.status == false) {
				this.$router.push('/');
				showErrorMessage('Conta bloqueada, contacte o administrador');
      }
      


     
      axios
        .get(`https://sanguemozapi.herokuapp.com/api/dadores`)
        .then(response => {

              response.data.forEach(element => {
                if(element.fatorRH == this.getUserAuth.id) {
                 this.conf = true
               
          } 
              });

          
        })

        .catch(e => {
        });
      

    }
    ,
    methods:{

      ...mapActions('auth', ['logoutUser']),
      





    sair(){
      this.$q
					.dialog({
						title: 'Confirme',
						message: 'Tem certeza que deseja sair do sistema?',
						ok: 'Sim',
						cancel: true,
						cancel: 'Não',
						persistent: true
					})
					.onOk(() => {
						this.logoutUser();
					});
    }





    

    }




}
</script>
