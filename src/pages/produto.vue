<template>
  <q-page padding>
    <q-item clickable tag="a" to="/produto" >
          <q-item-section avatar>
            <q-icon name="eco" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sangue</q-item-label>
            <q-item-label caption >Gerenciar grupo sanguineo</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" >
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Agendamentos</q-item-label>
            <q-item-label caption>Gerenciar Agendamentos</q-item-label>
          </q-item-section>
        </q-item>
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
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
