
<script setup >
import { ref, onMounted, useAttrs, toRefs } from "vue";

const props = defineProps({
  indeterminate: Boolean,
  className: String,
  checked:Boolean
});

const { indeterminate, className,checked } = toRefs(props);
const inputRef = ref(null);
</script>

<template>
  <input
    type="checkbox"
    ref="inputRef"
    :checked="checked"
    :class="`${className}`"
    :indeterminate="indeterminate"
    v-bind="$attrs"
  />
</template>
