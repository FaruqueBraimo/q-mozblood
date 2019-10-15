<template>
  <ul >

    <li v-for="dador of dadores" :key="dador.codigo">
      <p><strong>{{dador.nome}}</strong></p>
     
    </li>
  
  </ul>
</template>
<script>
import axios from 'axios';
import Dador from  '../services/dadores'

export default {
  data() {
    return {
      dadores: [],
      errors: []
    }
  },
  mounted() {
    axios.get(`http://localhost:8085/api/dadores`)
    .then(response => {
     this.dadores = response.data;
     console.log(this.dadores.nome)


    })
  
  }
}
</script>