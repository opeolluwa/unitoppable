<template>
    <!-- if the botton has a "to" props then render it as a link otherwise render as a button-->
    <a v-if="props.to" :href="props.to" class=" px-4 py-4 rounded-md ">
        {{ props.text }}
    </a>
    <button  v-else class=" px-4 py-2 rounded-md ">
       {{ props.text }}
       <slot></slot>
    </button>
</template>



<script setup lang="ts">
const props = defineProps(['text', 'to'])
</script>