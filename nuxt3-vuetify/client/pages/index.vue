<template>
    <NuxtLayout :name="layout">
        <section class="my-container">
            <BtnAddTransaction />
            <BoxDisplay />
            <Messages />
            <TableMonth />
        </section> 
    </NuxtLayout>
       
    
    
</template>

<script setup lang="ts">

const layout = 'default'

</script>