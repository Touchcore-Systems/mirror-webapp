<template>
  <testInput name="email" type="email" />
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import testInput from './testInput.vue';

useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
  }),
});
</script>
