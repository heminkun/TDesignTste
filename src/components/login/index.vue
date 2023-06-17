<template>
<div class="mainMax">
  <div style="height: 30%;display: flex;justify-content: end;flex-direction: column">
      <h2 style="display: flex;justify-content: center"><span>登录</span></h2>
  </div>
  <div class="mainLogin">
    <t-form>
      <t-form-item name="name" label="用户名/邮箱:">
        <t-input placeholder="请输入用户名或邮箱" style="width: 300px;">
          <template #prefix-icon><UserIcon/></template>
        </t-input>
      </t-form-item>
      <t-form-item name="pass" label="密码:">
        <t-input type="password" placeholder="请输入密码" style="width: 300px;">
          <template  #prefixIcon><LockOnIcon /></template>
        </t-input>
      </t-form-item>
      <t-form-item style="margin-left: 25px">
        <t-button style="width: 250px;" variant="base">
          登录
        </t-button>
      </t-form-item>
    </t-form>
    <div style="display: flex;justify-content: space-between">
      <t-link theme="primary" hover="color"> 没有账号？ </t-link>
      <t-link theme="primary" hover="color"> 忘记密码？</t-link>
    </div>
  </div>
<div style="height:30%">

</div>
</div>
</template>
<script setup>

import {LockOnIcon, UserIcon} from "tdesign-icons-vue-next";
</script>
<style scoped>
.mainMax{
  display: flex;
  height: 100%;
  flex-direction: column;
}
.mainLogin{
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>