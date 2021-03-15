<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-10 21:48:38
-->
<template>
  <el-container class="saas-main">
    <sider-bar></sider-bar>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@c/HelloWorld.vue";
import SiderBar from '@c/SiderBar/index.vue';


export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    SiderBar
  },
});
</script>

<style lang="scss">
#app {
  @include mainBody(1090px);
}
.saas {
  &-main {
    width: 100%;
    height: 100%;
  }
}
</style>
