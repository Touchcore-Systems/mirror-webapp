<template>
  <div class="tx-14 mg-t-20 tx-center">
    Forgot Password?
      <router-link :to="{ name: 'PasswordReset' }"  class="password-reset">
        Click Here to Reset
      </router-link>
  </div>
</template>


<style scoped>
.password-reset{
  color: #fff; 
  text-decoration: underline
}
</style>
