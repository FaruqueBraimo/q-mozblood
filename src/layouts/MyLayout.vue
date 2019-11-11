
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
        
          default-opened
        >

         <q-expansion-item to="sangue"  switch-toggle-side dense-toggle label="Lista de grupos" :header-inset-level="1" :content-inset-level="2">
          </q-expansion-item>

          
        </q-expansion-item>


    <q-expansion-item
          expand-separator
          icon="person"
          label="Dadores"
          default-opened
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

          <q-expansion-item to="confirmar"  switch-toggle-side dense-toggle label="Confirmar Dador" :header-inset-level="1" :content-inset-level="2">
           
          </q-expansion-item>

        </q-expansion-item>



<q-expansion-item
          expand-separator
          icon="calendar_today"
          label="Agendamentos"
          default-opened
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
          default-opened
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
          default-opened
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


        



         <q-item clickable tag="a"  to="produto">
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
export default {
  name: 'MyLayout',
  props: ['msg'],

  data () {
    return {
      leftDrawerOpen: false,
       welcome: '',
       agendamento : ''
    }
  },
   mounted() {
       
            this.welcome = localStorage.getItem('Zucula');

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
    methods:{


    sair(){
      alert('bro touh a zarpar');
       this.$router.push('/login') 
    }

    }




}
</script>
