<script setup lang="ts">
  import { ref, computed } from 'vue';

  const startValidation = ref(false);
  const email = ref('');

  const isValidEmail = computed(()=>{
          return startValidation.value ? /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value) : null;
  })

  function register(){
      startValidation.value = true;
  }
</script>

<template>
  <div class="desktop:flex desktop:justify-center content-center">

  <div class="desktop:flex desktop:flex-col">
   <input v-model="email" type="text" placeholder="Your email address..." class="inputEmail" :class="{valid : isValidEmail == true , invalid : isValidEmail == false }">
   <p class="error" v-if="email != '' && !isValidEmail">Please provide a valid email address</p> 
  </div>
  
  <div>
    <button @click="register" class="btn">Notify Me</button>
  </div>
</div>
</template> 