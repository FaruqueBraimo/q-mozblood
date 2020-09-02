<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-red-5 text-white text-bold">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
           Moz Sangue
        </q-toolbar-title>
          <q-space />

     
      <div class="row no-wrap ">

        <div class=" q-pt-sm  q-pl-xl col">
            Sobre Nos
        </div>

        <div class="col ">
      
        <q-btn label="Login" color=''  @click="$router.push('/login')" outline   unelevated   />
        </div>

         <div class="col ">
      
        <q-btn label="Registar"  outline   @click="$router.push('/register')"  unelevated  flat />
        </div>
      </div>
      
      </q-toolbar>
    </q-header>



    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-red-5 text-white">
      <q-toolbar>
        <q-toolbar-title class = ' text-bold text-center'>
         
          @Todos os direitos Reservados SangueMoz
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>