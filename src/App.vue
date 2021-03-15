<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-10 21:48:38
-->
<template>
  <el-container class="saas-main">
    <sider-bar></sider-bar>
    <el-container>
      <el-header height="48px">Header</el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@c/HelloWorld.vue";
import SiderBar from "@c/SiderBar/index.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    SiderBar,
  },
});
</script>

<style lang="scss">
#app {
  @include mainBody(1090px);
}
</style>
<style lang="scss" scoped>
.saas {
  &-main {
    width: 100%;
    height: 100%;
  }
}
:deep(.el-header) {
  padding: 0;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
}
:deep(.el-main) {
  padding: 0;
}
</style>
