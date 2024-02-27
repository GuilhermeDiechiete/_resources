<template>

    <NuxtLink :to="to" class="button is-fullwidth m-2 bg-orangered text-white">{{ text }}</NuxtLink>

  </template>
  
  <script setup>
    props: ['to', 'text'];
  
 
  </script>
  
  