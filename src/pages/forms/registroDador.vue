<template>
  <q-page padding>
 <div class="q-pa-md">
    <div class="q-gutter-lg row">
      
    <q-input standout bottom-slots v-model="nome" label="Nome" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="nome = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Joao Felix
        </template>
      </q-input>


      <q-input standout  bottom-slots v-model="text" label="Apelido" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="Apelido = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Aveiro
        </template>
      </q-input>

      <q-select filled bottom-slots v-model="model" :options="options" label="Label" counter :dense="dense" :options-dense="denseOpts" >
        <template v-slot:prepend>
          <q-icon name="place" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="model = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-select>


        <q-input standout  bottom-slots v-model="text" label="Apelido" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="Apelido = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Aveiro
        </template>
      </q-input>
        <q-input standout  bottom-slots v-model="text" label="Apelido" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="Apelido = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Aveiro
        </template>
      </q-input>
        <q-input standout  bottom-slots v-model="text" label="Apelido" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="Apelido = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Aveiro
        </template>
      </q-input>

    </div>
  </div>

  </q-page>
</template>

<script>
export default {
 data () {
    return {
      nome: '',
      ph: '',

      dense: false
    }
  }
}
</script>
