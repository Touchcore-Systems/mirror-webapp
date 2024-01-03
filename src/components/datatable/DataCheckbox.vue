
<script setup >
import { ref, onMounted, useAttrs, toRefs } from "vue";

const props = defineProps({
  indeterminate: Boolean,
  className: String,
});

const { indeterminate, className } = toRefs(props);

const inputRef = ref(null);
</script>

<template>
  <input
    type="checkbox"
    ref="inputRef"
    :class="`${className}`"
    :indeterminate="indeterminate"
    v-bind="$attrs"
  />
</template>
