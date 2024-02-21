<script setup>
import BaseButton from "@/components/base/BaseButton.vue";
import BaseError from "@/components/base/BaseError.vue";
import BaseHeading from "@/components/base/BaseHeading.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseLoader from "@/components/base/BaseLoader.vue";

import { ref } from "vue";

const error = ref(null);
const email = ref(null);
const loading = ref(false);

const resetPassword = () => {
  loading.value = true;
};

</script>
<template >
  <BaseHeading heading="Reset Password" />
  <p class="">
    Please enter your email address below and we'll email you instructions for
    setting a new password.
  </p>
  <BaseError v-if="error" :error="error" />
  <BaseInput
    v-model="email"
    type="email"
    placeholder="yourname@example.com"
    label="Email address"
  />
  <BaseButton @handleClick="resetPassword" type="button" :loading="loading"
    >Reset Password
    <BaseLoader v-if="loading" />
  </BaseButton>
</template>
<style scoped>
h1,
h2,
h3 {
  color: white;
}
</style>

