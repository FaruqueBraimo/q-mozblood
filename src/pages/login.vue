<template>









 <div class="q-pa-md ">

 
     <p class="text-white">.</p>
  
    <q-card-actions  class="row justify-center">
 
      <div class="q-gutter-y-md column" style="max-width: 300px">

      
    <p class="text-h6 text-center" >Tela login</p> 
   
  <q-input outlined bottom-slots v-model="text" label="Usuario" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="person" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Faruque
        </template>
      </q-input>
 

      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Data Nascimento" label="Senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

   <q-btn   color="red-5" v-close-popup @click="salvar()">

    <router-link :to="{ name: 'MyLayout', params: {msg} }">
         Entrar
      </router-link>
     
   </q-btn>



    </div>
       
           
        </q-card-actions>
  </div>



 
</template>


<script>
import {bus} from '../router'

export default {
  data(){
    return {
      user:{
        nome:"Faruk",
        pass:"123"
      }
    }
  },

mounted()  { 
        //http://localhost:8085/api || https://sanguemozapi.herokuapp.com/api/

  axios.get(`https://sanguemozapi.herokuapp.com/api/dadores/`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.data = response.data
      console.log(response.data
      )
      console.log("--------------")
    })
    .catch(e => {
      this.errors.push(e)
    })
    

 },
    methods:{



   salvar(){
   
   
    if((this.text=="Ella") && (this.password=="1234")){
      bus.$emit("changeMsg", this.user)
       this.$router.push('/') 


  

  }else{

  this.showNotif();

    
  }
   },
    showNotif () {
      this.$q.notify({
        message: 'Senha ou Usuario incorretoss',
        color: 'dark',
       

      })
    }
  

    },
  data () {
    return {
      msg: 'This is Ali s profile',
      text: '',
      ph: '',
      password: '',
      isPwd: true,

      email: '',
      search: '',
      tel: '',
      url: '',
      time: '',
      date: '',
      data:[],

      dense: false
    }
  }


}
</script>