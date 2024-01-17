<script setup>
import { onMounted } from "vue";
import { initConnection } from "@/services/settings";


onMounted(() => {
  initConnection();
});

</script>

<template>
  <br />
  <br />
  <div
    class="text-center footer-text btn-block"
    style="color: white; font-size: 0.7rem"
  >
    <p>
      Copyright &copy; <span id="year"></span> MirrorAR LLC. All Rights
      Reserved. <br />
      MirrorAR is covered by U.S. Patent No. 11,069,144.
    </p>
    <a href="privacy-policy.html" class="footer-link" target="_blank"
      >Privacy Policy</a
    >
    |
    <a class="footer-link" href="terms-conditions.html" target="_blank"
      >Terms of Use</a
    >
    | <a href="eusa.html" class="footer-link" target="_blank">EUSA</a>
    <br />Version <span id="backendVersion"></span>
    <br />
  </div>
</template>

<style scoped>
.footer-text > a {
  color: rgba(60, 204, 175, 1);
}

.footer-text > a:hover {
  color: rgba(60, 204, 175, 1);
}
</style>