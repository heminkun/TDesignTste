<template>
<div class="loginMax">
  <login-branch/>
  <div class="login">
    <login-main/>
  </div>
</div>
</template>

<script setup>
import loginMain from "@/components/login/index.vue"
import loginBranch from "@/components/login/ branch/index.vue"
</script>



<style scoped>
.loginMax{
  display: flex;
  height: 100vh;
  width: 100%;
}
.login{
  width: 500px;
  background-color: white;
}
</style>