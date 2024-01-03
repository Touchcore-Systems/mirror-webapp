<script setup>
const { label, type, placeholder, modelValue } = defineProps([
  "label",
  "type",
  "placeholder",
  "modelValue",
]);
</script>
<template>
  <div class="form-group">
    <label v-if="label">{{ label }} </label>
    <slot name="search">
      <input
        :type="type"
        class="form-control"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        v-bind="$attrs"
      />
    </slot>
  </div>
</template>
