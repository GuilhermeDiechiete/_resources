<template>
    <v-card flat title="Minhas transações">

      <template v-slot:text>
        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" single-line variant="outlined" hide-details>
        </v-text-field>
      </template>
  
      <v-data-table :headers="headers" :items="desserts" :search="search">
      </v-data-table>

    </v-card>
  </template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          key: 'date',
          sortable: false,
          title: 'DATA',
        },
        { key: 'description', title: 'DESCRIÇÃO' },
        { key: 'installments', title: 'PARCELAS' },
        { key: 'amount', title: 'VALOR (R$)' },
        { key: 'category', title: 'CATEGORIA' },
        { key: 'destiny', title: 'DESTINO' },
        { key: 'status', title: 'STATUS' },
        { key: 'options', title: 'OPÇÕES' },
      ],
      desserts: [
        {
          date: '08-03-2024',
          description: 'Faculdade',
          installments: '25 - 48',
          amount: 560.00,
          category: 'Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        {
          date: '08-03-2024',
          description: 'Parcela Carro',
          installments: '1 - 4',
          amount: 334.00,
          category: 'Não Essenciais',
          destiny: 'Banco Sicredi',
          status: 'Pendente',
          options: 'X'
        },
        
      ],
    }
  },
}
</script>