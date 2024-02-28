<template>
    <NuxtLink :to="to">
        <div class="item-nav">
           {{ text }}
        </div>    
    </NuxtLink>
    
    
</template>

<script>
import { defineProps } from 'vue'; 

export default {
    props: {
        to: String, 
        text: String
    }
};
</script>


