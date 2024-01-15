<script setup>
import BaseError from "@/components/base/BaseError.vue";
// import BaseError from "@/components/base/BaseError.vue";
import BaseHeading from "@/components/base/BaseHeading.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import PasswordResetIndicator from "./components/PasswordResetIndicator.vue";

import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import AJAX from "../../utils/ajax/Ajax";

const error = ref(null);
const email = ref(null);
const password = ref(null);
const loading = ref(false);
const user = ref(null);
const router = useRouter();

const login = async () => {
  try {
    loading.value = true;
    error.value = null;

    const data = await AJAX("/default/call/json/authorize", "POST", {
      email: email.value,
      password: password.value,
    });

    user.value = data;
    router.push({ name: "My Patients" });
  } catch (e) {
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

  <BaseButton @handle-click="login" type="button" :loading="loading"
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


