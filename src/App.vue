<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-10 21:48:38
-->
<template>
  <el-container class="saas-main">
    <el-aside width="200px" class="saas-aside">
      <div class="saas-img"></div>
      <el-menu
        class="saas-menu"
        :default-openeds="['1', '3']"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#101945"
      >
        <el-submenu index="1">
          <template #title><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template #title><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template #title><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template #title>选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
      <div class="saas-fold"></div>
    </el-aside>
    <el-main></el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
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
  &-aside {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: $--aside-bg-color;
  }
  &-img {
    height: 78px;
    border-bottom: 1px solid red;
  }
  &-menu {
    flex: 1;
  }
  &-fold {
    height: 44px;
    border-top: 1px solid red;
  }
}
::v-deep .is-active {
  color: #5384ff;
}
</style>
