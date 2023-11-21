<script setup lang="ts">
import EmailInput from './components/Email-Input.vue'; 
</script>

<template>
  <header class="mt-20 text-center">
    <div class="font-Franklin">
      <h1 class="mb-10 uppercase text-[22px] font-bold animate-jump-in animate-duration-[3000ms] desktop:text-3xl">Ping<span class="text-primary-100">.</span></h1>
      <h2 class="text-2xl font-light text-neutral-100 animate-jump-in animate-duration-[2000ms] desktop:text-4xl">We are launching <span class="font-bold text-black">soon!</span></h2>
      <h3 class="text-[13px] mb-8 font-light animate-jump-in animate-duration-[2000ms] desktop:text-base">Suscribe and get notified</h3>
    </div>
    <Email-Input/>
  </header>

  <div class="flex justify-center">
  <img class="mt-20 w-80 desktop:w-[530px] desktop:mt-16" src="/public/images/illustration-dashboard.png" />
  </div>

  <div class="flex gap-6 justify-center mt-20 mb-9">
    <img class="h-10 w-10" src="/public/images/facebook.png" alt="">
    <img class="h-8 w-9 mt-1" src="/public/images/twitter.png" alt="">
    <img class="h-10 w-10" src="/public/images/instagram.png" alt="">
  </div>
  <div class="font-Franklin text-xs text-center mb-16">© Copyright Ping. All rights reserved.</div>
</template>