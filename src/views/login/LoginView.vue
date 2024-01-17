<script setup>
import BaseError from "@/components/base/BaseError.vue";
// import BaseError from "@/components/base/BaseError.vue";
import BaseHeading from "@/components/base/BaseHeading.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { login } from "@/services/auth";
import PasswordResetIndicator from "./components/PasswordResetIndicator.vue";

import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const error = ref(null);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const user = ref(null);
const router = useRouter();
const route = useRoute();

const handleLogin = async () => {
  try {
    loading.value = true;
    error.value = null;

    const data = await login(email.value, password.value);
    user.value = data;
    console.log(route?.query);


    // if (Object.keys(route?.query).length != 0) {
    //   console.log({ path: route?.query?.redirect });
    //   return
    // }


    router.push({ name: "My Patients" });
  } catch (e) {
    console.log(e);
    error.value = e;
  } finally {
    loading.value = false;
  }
};
</script>
<template>
  <BaseHeading heading="Sign In" />
  <BaseError v-show="error" :error="error" />

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

  <BaseButton @handle-click="handleLogin" type="button" :loading="loading"
    >Sign In

    <!-- <BaseLoader v-if="loading" /> -->
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


