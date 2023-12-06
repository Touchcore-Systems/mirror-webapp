<template>
    <button :type="type" @click="emit('handleClick')" class="gradient-bg btn btn-info btn-block enterBtn" :disabled="loading">
       <slot /> 
    </button>
</template>
<script setup>
const { loading, type,leftIcon } = defineProps([
    'leftIcon',
    "loading",
    "type",
]);
const emit = defineEmits(['handleClick']);
</script>