<script setup>
import {Field, ErrorMessage } from "vee-validate";

import { useField } from "vee-validate";

const { field } = defineProps({
  field: {
    type: Object,
    required: true,
  },
});
const { as, labelClass, name, placeholder,label, children, outerdivClass, ...attrs } = field;
console.log(attrs);
</script>
<template>
  <div :class="outerdivClass ? outerdivClass : 'form-group'">
    <label :for="name" :class="labelClass" v-if="label">{{ label }}</label>
    <Field :as="as" :id="name" :name="name"  v-bind="attrs" class="form-control">
      <template v-if="children && children.length">
        <component
          v-for="(child, idx) in children"
          :key="idx"
          :is="child.tag"
          v-bind="child.attrs"
        >
          {{ child.text }}
        </component>
      </template>
    </Field>
    
      <div class="error">
        <ErrorMessage  :name="name" />
      </div>
    
  </div>
</template>
<style scoped>
input[disabled] {
  cursor: not-allowed;
}

.error {
  margin-top: 7px;
  height: 7px;
  color: red;
  font-size: 15px;
}
</style>