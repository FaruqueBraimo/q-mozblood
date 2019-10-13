<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-red-5 text-white">
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

     <q-btn-dropdown
      split
      content-class="bg-red-2"

    >
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md">Definicoes</div>
          <q-toggle v-model="mobileData" label="Use Mobile Data" />
          <q-toggle v-model="bluetooth" label="Bluetooth" />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">Faruque</div>

        <q-btn round color="red-5" icon="keyboard_arrow_right" />
        </div>
      </div>
    </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-red-2"
    >
      <q-list bordered class="rounded-borders">
        <q-item-label header>Menu</q-item-label>
        <q-item clickable tag="a" to="/dash">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>pagina principal</q-item-label>
          </q-item-section>
        </q-item>

 <q-expansion-item
          expand-separator
          icon="person"
          label="Dadores"
          caption="Gerenciar Dadores"
          default-opened
        >

          <q-expansion-item switch-toggle-side dense-toggle label="Lista de Dadores" :header-inset-level="1" :content-inset-level="2">
           
           
         <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todos </q-item-label>
          </q-item-section>
        </q-item>

         <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Reprovados</q-item-label>
          </q-item-section>
        </q-item>

           <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Atendidos</q-item-label>
          </q-item-section>
        </q-item>

           <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Faltosos</q-item-label>
          </q-item-section>
        </q-item>

          </q-expansion-item>

          <q-expansion-item to="registroDador"  switch-toggle-side dense-toggle label="Adicionar Dador" :header-inset-level="1" :content-inset-level="2">
          </q-expansion-item>

        </q-expansion-item>

<q-expansion-item
          expand-separator
          icon="nature_people"
          label="Doacoes"
          caption="Gerenciar Doacoes"
          default-opened
        >

          <q-expansion-item 
          switch-toggle-side dense-toggle label="Lista de Doacoes"
           :header-inset-level="1"
            :content-inset-level="2">
           
           
  

          </q-expansion-item>

          <q-expansion-item  switch-toggle-side dense-toggle label="Adicionar Doacoess" :header-inset-level="1" :content-inset-level="2">
          </q-expansion-item>

        </q-expansion-item>


<q-expansion-item
          expand-separator
          icon="calendar_today"
          label="Agendamentos"
          caption="Gerenciar Agendamentos"
          default-opened
        >

          <q-expansion-item switch-toggle-side dense-toggle label="Visualizar" :header-inset-level="1" :content-inset-level="2">
           
           
         <q-item clickable tag="a" to="/agendamentos">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Todos </q-item-label>
          </q-item-section>
        </q-item>

         <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Confirmados</q-item-label>
          </q-item-section>
        </q-item>

           <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cancelados</q-item-label>
          </q-item-section>
        </q-item>

           <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Adiados</q-item-label>
          </q-item-section>
        </q-item>

          </q-expansion-item>

          <q-expansion-item  switch-toggle-side dense-toggle label="Agendar" :header-inset-level="1" :content-inset-level="2">

                
         <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Marcar</q-item-label>
          </q-item-section>
        </q-item>

<q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cancelar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" to="/dadores">
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Adiar</q-item-label>
          </q-item-section>
        </q-item>

          </q-expansion-item>

        </q-expansion-item>

         <q-item clickable tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="nature_people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Produto gerado / Stock</q-item-label>
            <q-item-label caption>Gerenciar Produto gerado e stock</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank">
          <q-item-section avatar>
            <q-icon name="insert_chart_outlined" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Relatorios</q-item-label>
            <q-item-label caption>Gerenciar Relatorios</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" >
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Definiçoes</q-item-label>
            <q-item-label caption>Configurar alguns itens do sistema</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

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
