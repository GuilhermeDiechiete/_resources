<template>
    <v-card class="mx-auto" width="256">
      <v-layout>
        <v-navigation-drawer permanent absolute>
          <v-list>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
              :title="store.user.username"
              :subtitle="store.user.email">

              <template v-slot:append>
                <v-btn
                  size="small"
                  variant="text"
                  icon="mdi-menu-down"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list
            :lines="false"
            density="compact"
            nav
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
              :to="item.to"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
  
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  
        <v-main style="height: 354px;"></v-main>
      </v-layout>
    </v-card>
  </template>
<script setup lang="ts">

const store = useUserStore()
await store.show()

const items = [
      { text: 'Iniciar', icon: 'mdi-home', to:'/'},
      { text: 'Categorias', icon: 'mdi-widgets', to:'/categories'},
      { text: 'Contas', icon: 'mdi-star', to:'/accounts'},
      { text: 'Relatórios', icon: 'mdi-folder', to:'/reports'},
    ]

</script>


