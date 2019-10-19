<template>
  <q-page padding>
    <!-- content -->
  <div class="q-pa-md">

    <div class="row">
      <div class="col">
       <q-card style="max-width: 200px ">
        <q-card-section>
          <div class="text">Agendamentos</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
       <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="teal"
      track-color="teal-3"
     
    />
        </q-card-section>
      </q-card>
      </div>
      <div class="col">
        <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text">Litros Doados</div>
       
        </q-card-section>

        <q-separator inset />

        <q-card-section>
           <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
     color="red"
      track-color="red-3"
     
    />
        </q-card-section>
      </q-card>
      </div>

<div class="col">
      <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text justify-center">Doadores Atendidos</div>
         
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="lime"
      track-color="lime-3"
     
     
    />
        </q-card-section>
      </q-card>
      </div>
      <div class="col">
       <q-card style="max-width: 200px">
        <q-card-section>
          <div class="text ">Doadores reprovados</div>
          
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <q-knob
      :min="5"
      :max="10"
      v-model="value1"
      show-value
      size="50px"
      :thickness="0.22"
      color="orange"
      track-color="orange-3"
    />
        </q-card-section>
      </q-card>
      </div>
    </div>

      
  

  </div>


  </q-page>
</template>

<style lang="sass">

  
</style>

<script>
export default {
  // name: 'PageName',
}
</script>
