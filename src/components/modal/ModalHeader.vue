<template>
  <div class="modal-header">
    <h6 id="patient-label" class="modal-title">{{ header }}</h6>
    <slot />
  </div>
</template>

<script setup>
const { header } = defineProps(["header"]);
</script>

<style  scoped>
</style>