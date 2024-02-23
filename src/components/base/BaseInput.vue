<script setup>
import { useField } from 'vee-validate';

const { label, type, placeholder, modelValue, labelClass, required ,outerdivClass  ,name,} =

defineProps({
  label:String,
    labelClass:String,

    name: String,
  placeholder:String,
  modelValue:String,

  outerdivClass:{
    type:String,
    default:"form-group"
  },


required:Boolean,
  type:{
    type:String,
    default:"text"
  },

})


const { errorMessage, value, handleChange, handleBlur } = useField(
  () => name,
  undefined,
  {
    validateOnValueUpdate: false,
  }
);

const validationListeners = {
  blur: (evt) => handleBlur(evt, true),
  change: handleChange,
  input: (evt) => handleChange(evt, !!errorMessage.value),
};
</script>
<template>
  <div :class="outerdivClass">
    <label :class="labelClass" v-if="label">
      <span v-if="required" class="required">*</span>
      {{ label }}
    </label>
    <slot name="others">
      <input
        :type="type"
        class="form-control"
        :value="value"
        v-on="validationListeners"
        :placeholder="placeholder"
        v-bind="$attrs"
      />

    </slot>
          <slot name="options"/>

          <div class="error"><span v-if="errorMessage">* </span>{{ errorMessage}}</div>
  </div>
</template>
<style scoped>
input[disabled]{
cursor: not-allowed;
}
.error {
  margin-top: 9px;
  height: 7px;
  color: red;
  font-size: 14px;
}
</style>
