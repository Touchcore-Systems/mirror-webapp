<template>
  <footer class="content-footer">
    <p class="text-center text-muted footer-text btn-block">
      <a href="https://www.mirrorar.io/" target="_blank" class="">
        <img src="@/assets/img/logo.svg" class="w-100px" />
      </a>
      <br />Copyright &copy;<span id="year"></span> MirrorAR LLC. All Rights
      Reserved. <br />
      <a href="privacy-policy.html" target="_blank">Privacy Policy</a> |
      <a href="terms-conditions.html" target="_blank">Terms of Use</a> |
      <a href="eusa.html" class="footer-link" target="_blank">EUSA</a>
    </p>
  </footer>
</template>


<script setup>
import { onMounted } from "vue";
import { initConnection } from "@/services/settings";

onMounted(() => {
  initConnection();
});

</script>

<style scoped>
.w-100px{
  width: 100px
}
</style>

