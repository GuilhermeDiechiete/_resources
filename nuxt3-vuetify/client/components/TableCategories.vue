<template>
  <v-card title="Minhas Categorias" flat>

    <template v-slot:text>
      <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined" hide-details single-line />
    </template>

    <v-data-table :headers="headers" :items="categories" :search="search">

      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.name }}</td>
          <td>
            <span v-if="item.type === 'expense'">Despesas</span>
            <span v-if="item.type === 'income'">Rendas</span>
            <span v-if="item.type === 'investment'">Investimentos</span>
          </td>
          <td>
            <v-btn color="primary" @click.prevent="store.delete(item.id)">
              Button
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">

const search = ref('') // campo de busca

const store = useCategoryStore(); // importação do store de categoria
store.index() // buscando todas as categorias

const categories = ref(store.categories) // categorias

// monitora mudanças em categories
watch(() => store.categories, (newCategories) => {
  categories.value = newCategories;
  store.index() // apos uma mudança, ele chama a lista novamente e add em categories
});

// renderização 
const headers = [
  {
    title: 'Nome',
    align: 'start',
    sortable: false,
    key: 'name',
  },
  { title: 'Tipo de transação', key: 'type' },
];

</script>
