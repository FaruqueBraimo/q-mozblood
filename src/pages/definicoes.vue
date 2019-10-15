<template>
  <q-page padding>

<p v-for="datoras in dats" :key="datoras">
  
  
  
   data {{dats.nome}}
   
   
   
   </p>


  </q-page>
</template>

<script>
export default {

data(){
  return{
      dadoras: [
           {nome : 'faruque'}
         ]


  }
}


}
</script>
