<template>
    <section class="my-box">
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <div class="flex-item">
            <p>Despesas</p>
            <h1>{{ totalExpenses }}</h1>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="flex-item">
            <p>Rendimentos</p>
            <h1>{{ totalIncomes }}</h1>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="flex-item">
            <p>Investimentos</p>
            <h1>{{ totalInvestments }}</h1>
          </div>
        </v-col>
      </v-row>
    </section>
  </template>

<script setup lang="ts">

const store = useTransactionStore()

const totalExpenses = ref(store.totalByMonthExpenses || 0)
const totalIncomes = ref(store.totalByMonthIncomes || 0)
const totalInvestments = ref(store.totalAnnualInvestments || 0)
</script>
  
  <style>
  .my-box {
    margin: 1em 0;
  }
  .flex-item {
    background-color: #242424;
    padding: 20px;
    border-radius: 0.4em;
    text-align: left;
    width: 100%;
  }
  h1 {
    padding-top: 0.5em;
    font-size: 1.5em;
  }
  </style>
  