
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
          Moz Sangue App
        </q-toolbar-title>
     <q-space />

     
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
            <q-item-label text-color="white" >Home</q-item-label>
            <q-item-label  class="caption" >pagina principal</q-item-label>
          </q-item-section>
        </q-item>


<q-expansion-item
          expand-separator
          icon="hdr_strong"
          label="Grupo Sanguineo"
        
        >

         <q-expansion-item to="sangue"  switch-toggle-side dense-toggle label="Lista de grupos" :header-inset-level="1" :content-inset-level="2">
          </q-expansion-item>

          
        </q-expansion-item>


    <q-expansion-item
          expand-separator
          icon="person"
          label="Dadores"
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



<q-expansion-item
          expand-separator
          icon="calendar_today"
          label="Agendamentos"
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

         <!-- <q-item clickable tag="a" to="/confirmados">
          <q-item-section avatar>
            <q-icon name="done" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Confirmados</q-item-label>
          </q-item-section>
        </q-item> -->

           <!-- <q-item clickable tag="a" to="/cancelados">
          <q-item-section avatar>
            <q-icon name="clear" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cancelados</q-item-label>
          </q-item-section>
        </q-item>

           <q-item clickable tag="a" to="/adiados">
          <q-item-section avatar>
            <q-icon name="refresh" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Adiados</q-item-label>
          </q-item-section>
        </q-item> -->

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

<q-item clickable tag="a" to="">
          <q-item-section avatar>
            <q-icon name="cancel" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cancelar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="">
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

        </q-expansion-item>

<q-expansion-item
          expand-separator
          icon="favorite"
          label="Doacoes"
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


        



         <q-item clickable tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="nature_people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Produto gerado / Stock</q-item-label>
            <q-item-label caption class="caption">Gerenciar Produto gerado e stock</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="insert_chart_outlined" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Relatorios</q-item-label>
            <q-item-label caption class="caption">Gerenciar Relatorios</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" >
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Definiçoes</q-item-label>
            <q-item-label caption class="caption">Configurar alguns itens do sistema</q-item-label>
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
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
