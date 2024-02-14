<script setup>
const { label, type, placeholder, modelValue, labelClass, required ,outerdivClass} =

defineProps({
  label:String,
    labelClass:String,


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
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        v-bind="$attrs"
        :required="required"
      />

    </slot>
          <slot name="options"/>

  </div>
</template>
<style scoped>
input[disabled]{
cursor: not-allowed;
}
</style>
