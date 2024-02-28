<template>
    <div class="display">
        <p>{{ title }}</p>
        <h1>{{ amount }}</h1>
    </div>
</template>

<script>
import { defineProps } from 'vue'; 

export default {
    props: {
        title: String, 
        amount: String,
    }
};
</script>