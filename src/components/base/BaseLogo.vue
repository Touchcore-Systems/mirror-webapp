<template>
  <router-link
    :to="{ name: 'Login' }"
    class="aside-logo mg-lg-b-20 mg-xl-b-20 text-center"
  >
    <img src="@/assets/img/logo.png"  class="w-100" />
  </router-link>
</template>

<style scoped>
.text-center{
  text-align: center
}

.w-100{
  width: 100%
}
</style>