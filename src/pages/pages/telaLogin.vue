<template>
 <q-page class="flex flex-center">
     
     

      <q-input standout v-model="email" type="email" prefix="Email:" suffix="@gmail.com">
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
      </q-input>
   
  </q-page>
  
</template>