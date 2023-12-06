<script setup>
import BaseButton from "../../components/base/BaseButton.vue";
import BaseError from "../../components/base/BaseError.vue";
import BaseHeading from "../../components/base/BaseHeading.vue";
import BaseInput from "../../components/base/BaseInput.vue";
import BaseLoader from "../../components/base/BaseLoader.vue";

import { ref } from 'vue'

const error = ref(null)
const email = ref(null)
const loading = ref(false)


const resetPassword = () => {
    loading.value = true;
    console.log(email.value, loading.value, "dataaaaaaaaaaaaaaaaaaaaa");
}
</script>
<template >
    <BaseHeading heading="Reset Password" />
    <p class="">
        Please enter your email address below and we'll email you
        instructions for setting a new password.
    </p>
    <BaseError v-if="error" :error="error" />
    <BaseInput v-model="email" type="email" placeholder="yourname@example.com" label="Email address" />
    <BaseButton @handleClick="resetPassword" type="button" :loading="loading">Reset Password
        <BaseLoader v-if="loading" />
    </BaseButton>
</template>

<style >
body {
    background: #3a3a45e6;
    color: white;
}

h1,
h2,
h3 {
    color: white;
}

.gradient-bg {
    background: linear-gradient(90deg,
            #424bb2 0%,
            rgba(52, 134, 154, 1) 53%,
            rgba(60, 204, 175, 1) 100%) !important;
    border: none;
}

.footer-text>a {
    color: rgba(60, 204, 175, 1);
}

.footer-text>a:hover {
    color: rgba(60, 204, 175, 1);
}
</style>