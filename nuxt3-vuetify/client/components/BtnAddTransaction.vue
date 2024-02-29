<template>
    <div class="text-center">
      <v-btn block size="x-large" text="ADICIONAR TRANSAÇÃO" @click="sheet = !sheet" class="btn-add-transaction"/>
  
      <v-bottom-sheet v-model="sheet">
        <v-card class="text-center" height="50%">
          <v-card-text>
            <v-btn variant="text" @click="sheet = !sheet">
              fechar
            </v-btn>
  
            <br>
            <br>
  
            <form @submit.prevent="submit" class="my-box-form">

                <h3 class="mb-6">Adicionar Transação</h3>
                <Messages />
                <v-radio-group inline>
                    <v-radio label="Despesa" value="expense"></v-radio>
                    <v-radio label="Renda" value="income"></v-radio>
                    <v-radio label="Investimento" value="investment"></v-radio>
                </v-radio-group>

                <v-text-field v-model="date" label="Data" variant="underlined" />
                <v-text-field v-model="description" label="Descrição" variant="underlined" />
                <v-text-field v-model="name" label="Numero parcela Atual" variant="underlined" />
                <v-text-field v-model="name" label="Numero de parcelas totais" variant="underlined" />
                <v-text-field v-model="name" label="Valor R$" variant="underlined" />
                <v-autocomplete label="Categoria" :items="['Essenciais', 'Não Essenciais', 'Comida']" variant="underlined" />
                <v-text-field v-model="name" label="Conta de Saída / Entrada" variant="underlined" />
                <v-text-field v-model="name" label="Destino" variant="underlined" />
                <v-btn block> Criar </v-btn>
                </form>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </div>
  </template>

<script>
export default {
  data: () => ({
    sheet: false,
  }),
}
</script>

