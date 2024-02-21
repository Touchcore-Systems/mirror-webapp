<script setup>
import { storeToRefs } from "pinia";

import BaseError from "@/components/base/BaseError.vue";
import BaseHeading from "@/components/base/BaseHeading.vue";
import DynamicForm from "@/components/form/DynamicForm.vue";
import { loginformSchema } from "@/components/form/schema/schemas";

import PasswordResetIndicator from '@/views/login/components/PasswordResetIndicator.vue';
import { useUserStore } from "@/store/userStore";


const store = useUserStore();
const { error, loading } = storeToRefs(store);
const { handleLogin } = store;

</script>
<template>
  <BaseHeading heading="Sign In" />
  <BaseError v-show="error" :error="error" />
  <DynamicForm
    :schema="loginformSchema"
    @submit-handler="handleLogin"
    :loading="loading"
  />
  <PasswordResetIndicator />
</template>

<style scoped>
h1,
h2,
h3 {
  color: white;
}
</style>


