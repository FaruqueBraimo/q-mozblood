
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
          SGBS
        </q-toolbar-title>
     <q-space />

     <q-btn-dropdown
      icon="person_outline"
    
    >
      <div class="row no-wrap q-pa-md">

        <div class="column items-center">
      
        <q-btn label="Terminar Sessão"  @click="sair()"/>
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
        <q-item clickable tag="a" to="/dash">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section > 
            <q-item-label text-color="white" > Inicio </q-item-label>
            <q-item-label  class="caption" >pagina principal</q-item-label>
          </q-item-section>
        </q-item>


<q-expansion-item
          expand-separator
          icon="hdr_strong"
          label="Grupo Sanguineo"
           v-if="roles[getUserAuth.role.value].blood === 'true'"
        
        >

         <q-expansion-item to="sangue"  switch-toggle-side dense-toggle label="Lista de grupos" :header-inset-level="1" :content-inset-level="2">
          </q-expansion-item>

          
        </q-expansion-item>


    <q-expansion-item
          expand-separator
          icon="person"
          label="Dadores"
            v-if="roles[getUserAuth.role.value].donor === 'true'"
        >

          <q-expansion-item switch-toggle-side dense-toggle label="Lista de Dadores" :header-inset-level="1" :content-inset-level="2">
           
           
         <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="people
" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todos </q-item-label>
          </q-item-section>
        </q-item>

          </q-expansion-item>

          <q-expansion-item to="registroDador"  switch-toggle-side dense-toggle label="Adicionar Dador" :header-inset-level="1" :content-inset-level="2">
          </q-expansion-item>

           
          </q-expansion-item>

        </q-expansion-item>



<q-expansion-item
          expand-separator
          icon="calendar_today"
          label="Agendamentos"
                      v-if="roles[getUserAuth.role.value].agend === 'true'"

        >

          <q-expansion-item switch-toggle-side dense-toggle label="Visualizar" :header-inset-level="1" :content-inset-level="2">
           
           
         <q-item clickable tag="a" to="/agendamento">
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todos </q-item-label>
          </q-item-section>
        </q-item>

       

          </q-expansion-item>

          <q-expansion-item  switch-toggle-side dense-toggle label="Mais" :header-inset-level="1" :content-inset-level="2">

                
         <q-item clickable tag="a" to="/marcar">
          <q-item-section avatar>
            <q-icon name="post_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Marcar</q-item-label>
          </q-item-section>
        </q-item>

<q-item clickable tag="a" to="cancelar">
          <q-item-section avatar>
            <q-icon name="cancel" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cancelar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="adiar">
          <q-item-section avatar>
            <q-icon name="refresh" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Adiar</q-item-label>
          </q-item-section>
        </q-item>

          </q-expansion-item>

        </q-expansion-item>



        <q-expansion-item
          expand-separator
          icon="how_to_reg"
          label="Triagem"
                      v-if="roles[getUserAuth.role.value].trial === 'true'"

        >

          <q-expansion-item 
          switch-toggle-side dense-toggle label="Lista de Triagens"
           :header-inset-level="1"
            :content-inset-level="2" >

<q-item clickable tag="a" to="triagem">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todos </q-item-label>
          </q-item-section>
        </q-item>




          </q-expansion-item>

          
          <q-expansion-item  switch-toggle-side dense-toggle label="Adicionar Triagens" :header-inset-level="1" :content-inset-level="2" to="/marcarTriagem">
 </q-expansion-item>
          <q-expansion-item  switch-toggle-side dense-toggle label="Marcar Inaptidão" :header-inset-level="1" :content-inset-level="2" to="/inaptidao">
          </q-expansion-item>

        </q-expansion-item>

<q-expansion-item
          expand-separator
          icon="favorite"
          label="Doacoes"
           v-if="roles[getUserAuth.role.value].donations === 'true'"

        >

          <q-expansion-item 
          switch-toggle-side dense-toggle label="Lista de Doacoes"
           :header-inset-level="1"
            :content-inset-level="2" 
            to="/doacao">
           
           
  

          </q-expansion-item>

          <q-expansion-item  switch-toggle-side dense-toggle label="Adicionar Doacoes" :header-inset-level="1" :content-inset-level="2" to="/registroDaocao">
          </q-expansion-item>

        </q-expansion-item>


        <q-expansion-item
					icon="person"
					label="Funcionarios"
					dense-toggle
					my-active-class
					my-exact-active-class
					expand-icon-class="text-grey-8"
					class="ex-item"
          v-if="roles[getUserAuth.role.value].users === 'true'"

          
				>
					<q-list class="text-body1">
						<q-item clickable v-ripple to="/users">
							<q-item-section avatar>
								<q-icon
									color="white"
									name="list_alt"
								/>
							</q-item-section>
							<q-item-section class="text-white">
		
								<p>Lista de Funcionários</p>
							</q-item-section>
						</q-item>

						<q-item clickable v-ripple to='/roles'>
							<q-item-section avatar>
								<q-icon
									color="red-5"
									name="check_box"
								/>
							</q-item-section>
							<q-item-section>
								<p>Permissões</p>
							</q-item-section>
						</q-item>
					</q-list>
				</q-expansion-item>



         <q-item clickable tag="a"            v-if="roles[getUserAuth.role.value].stock === 'true'"
 to="produto">
          <q-item-section avatar>
            <q-icon name="nature_people" />
          </q-item-section>
          <q-item-section> 
            <q-item-label >Produto gerado / Stock</q-item-label>
            <q-item-label caption class="caption">Gerenciar Produto gerado e stock</q-item-label>
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

    background-image: -webkit-linear-gradient(135deg,#C0602B 30%,#A42153 90%)
    background-image: linear-gradient(135deg,#C0602B 30%,#A42153 90%)
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
       agendamento : ''
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
