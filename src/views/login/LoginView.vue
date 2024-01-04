<script setup>
import BaseError from "@/components/base/BaseError.vue";
import BaseHeading from "@/components/base/BaseHeading.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import BaseLoader from "@/components/base/BaseLoader.vue";
import PasswordResetIndicator from "./components/PasswordResetIndicator.vue";

import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const error = ref(null);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const router = useRouter();

const login = () => {
  loading.value = true;
  console.log(
    email.value,
    password.value,
    loading.value,
    "dataaaaaaaaaaaaaaaaaaaaa"
  );
  router.push({ name: "My Patients" });
};
</script>
<template>
  <BaseError v-if="error" :error="error" />
  <BaseHeading heading="Sign In" />

  <BaseInput
    v-model="email"
    type="email"
    placeholder="yourname@yourmail.com"
    label="Email"
  />
  <BaseInput
    v-model="password"
    type="password"
    placeholder="Enter your password"
    label="Password"
  />

  <BaseButton @handleClick="login" type="button" :loading="loading"
    >Sign In
    <BaseLoader v-if="loading" />
  </BaseButton>

  <PasswordResetIndicator />
</template>
<style scoped>
h1,
h2,
h3 {
  color: white;
}
</style>


