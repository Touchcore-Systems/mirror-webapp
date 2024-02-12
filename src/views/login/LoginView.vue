<script setup>
import { storeToRefs } from 'pinia'

import BaseError from "@/components/base/BaseError.vue";
import BaseHeading from "@/components/base/BaseHeading.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import PasswordResetIndicator from "./components/PasswordResetIndicator.vue";

import { useUserStore } from '@/store/userStore';


const store = useUserStore()
const {  email, password,error,loading } = storeToRefs(store)
const { handleLogin } = store


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
  <BaseButton @handle-click="handleLogin" type="button" :loading="loading">Sign In</BaseButton>

  <PasswordResetIndicator />
</template>
<style scoped>
    h1,
    h2,
    h3 {
      color: white;
      }   
</style>


