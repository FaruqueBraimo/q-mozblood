<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">Desculpa, Não há nada aqui...<strong>(404)</strong></p>
    <q-btn
      color="red-5"
      style="width:200px;"
      to="/"
      label="Voltar"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
