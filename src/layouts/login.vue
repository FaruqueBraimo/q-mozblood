
<template>


  <q-layout view="lHh Lpr lFf">
  
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
  name: 'login',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
