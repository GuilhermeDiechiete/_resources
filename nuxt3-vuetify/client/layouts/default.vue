<template>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <ItemNavegation to="/" text="OrgFin"/>
        <ItemNavegation to="/categories" text="Categorias"/>
        <ItemNavegation to="/accounts" text="Contas"/>
        <ItemNavegation to="/" text="Relatórios"/>
        <ItemNavegation to="/" text="Calculadora"/>
      </v-navigation-drawer>
  
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer">
        </v-app-bar-nav-icon>
  
        <v-app-bar-title>OrgFin</v-app-bar-title>
      </v-app-bar>
  
      <v-main>
        <NuxtPage/>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const drawer = ref(null)
  </script>
  
  <script>
    export default {
      data: () => ({ drawer: null }),
    }
  </script>