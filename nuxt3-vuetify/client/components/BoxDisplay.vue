<template>
    <section class="my-box">
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <div class="flex-item">
            <p>Despesas</p>
            <h1>R$ 1.000</h1>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="flex-item">
            <p>Rendimentos</p>
            <h1>R$ 1.000</h1>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="flex-item">
            <p>Investimentos</p>
            <h1>R$ 1.000</h1>
          </div>
        </v-col>
      </v-row>
    </section>
  </template>
  
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
  