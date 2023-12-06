<template>
    <div v-if="error" class="alert alert-danger">
                {{ error }}
              </div> 
</template>
<script setup>
const { error } = defineProps(['error'])
</script>