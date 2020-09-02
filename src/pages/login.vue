<template>






<div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
       
        class="bg-red-3 text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="row no-wrap ">
              <q-img
                src="/statics/1.png"
                :ratio="16/9"
                spinner-color="whte"
                spinner-size="20px"
              />

          
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
         <q-img
                src="/statics/2.png"
                :ratio="16/9"
                spinner-color="whte"
                spinner-size="20px"
              />

         
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
         <q-img
                src="/statics/3.png"
                :ratio="16/9"
                spinner-color="whte"
                spinner-size="20px"
              />

          
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-img
                src="/statics/4.png"
                :ratio="16/9"
                spinner-color="whte"
                spinner-size="20px"
              />

          <div class="q-mt-md text-center">
              Salve Vidas 
          </div>
        </q-carousel-slide>
      </q-carousel>

     
    </div>


    <div class="q-pa-md  row justify-center text-center">
    <q-btn color="red-5" unelevated class="q-pa-lg q-px-xl col-3 text-bold"   @click="$router.push('/register')"  label="Tornar-se dador" />
  </div>

 


      <!-- <div class="row" v-for="i in cards" :key="i"> -->
<div class="row q-mb-xl q-pt-md justify-left	">
          <div class=" col-4 q-pa-sm q-pl-md   " v-for="i in cards"    :key="i"
     >
        <q-card class="my-card">
        <q-card-section class="bg-red-5 text-white text-bold  text-body1 text-center">
        {{ i.titulo }}
      </q-card-section>

      <q-card-section>
        {{ i.texto }} 
      </q-card-section>
    </q-card>
      </div>
 </div>

 <div class="text-red-5 text-bold text-h6 text-center q-pax-md" >
      Voce sabia?
  </div>

  
  <div class="q-px-xl text-body1 text-center " >
     Todos os dias acontecem centenas de acidentes, cirurgias e queimaduras violentas que exigem transfusão, assim como os portadores de hemofilia, leucemia e anemias.Além disso, doar sangue é um ato simples, tranquilo e seguro que não provoca risco.

  </div>


  </div>



 
</template>

<script>
export default {
  data () {
    return {
      cards : [
        { titulo : 'É seguro doar sangue?', texto : 'Sim, todo o material usado, inclusive os kits são esterilizados, descartáveis e apirogênicos (não causam febre). Além disso, o doador passa por uma consulta, antes de doar, onde são'},
         {titulo : 'Quais os cuidados após a doação?', texto : 'O doador deve alimentar-se bem, ingerir bastante líquido e evitar bebidas alcoólicas, bem como, fumar nas primeiras duas horas e esforço físico no dia da doação. '},  
          {titulo : 'É necessário estar em jejum para doar?', texto : 'Não. É importante que o doador se alimente normalmente, evitando ingerir alimentos gordurosos no dia da doação. Após o almoço, é necessário esperar cerca de uma hora.'},
         
      
      ],
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>