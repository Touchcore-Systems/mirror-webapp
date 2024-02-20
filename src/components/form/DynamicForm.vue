<script setup>
import { Form } from "vee-validate";
import BaseButton from "@/components/base/BaseButton.vue";
import FormInput from './FormInput.vue';
const emit = defineEmits(["submitHandler"]);
defineProps({
  schema: {
    type: Object,
    required: true,
  },
  loading : Boolean
});

function onSubmit(values) {
  emit('submitHandler',values)
}

</script>
<template>
  <Form @submit="onSubmit">
    <FormInput
      v-for="(field, index) in schema.fields"
      :key="index"
      :field="field"
    />
    <BaseButton type="submit" :loading="loading">{{ schema.submitLabel }}</BaseButton>
  </Form>
</template>

<style scoped></style>
