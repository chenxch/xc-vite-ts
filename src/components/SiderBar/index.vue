<!--
 * @Description:  
 * @Author: chenxch
 * @Date: 2021-03-15 15:43:05
-->
<template>
  <el-aside width="200px" class="saas-aside">
      <div class="saas-img"></div>
      <el-scrollbar wrap-class="scrollbar-wrapper"
        class="saas-menu">
      <el-menu
        :default-active="active"
        background-color="transparent"
        text-color="#fff"
        active-text-color="#101945"
        @select="handleSelect"
        router
      >
        <el-submenu :index="menu.path" v-for="menu in menuList" :key="menu.id">
          <template #title><i class="saas-icon" :class="menu.ico"></i>
          <span>{{menu.name}}</span></template>

            <el-menu-item :index="childMenu.path" v-for="childMenu in menu.children" :key="childMenu.id">
              <span>{{childMenu.name}}</span></el-menu-item>
        
        </el-submenu>

  
      </el-menu>
      </el-scrollbar>
      <div class="saas-fold"></div>
    </el-aside>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const active = ref('/home');
    const menuList = reactive([
      {
       id:1,
       ico: 'el-icon-message',
       path: '',
       name: '监控场景',
       children: [
         {
          id:2,
          path: '/home',
          name: '主机监控'
          },
          {
          id:3,
          path: '/about',
          name: '数据监控'
          }
       ]
      }
    ])
    const handleSelect = (index: string) => {
        active.value = index;
      }
    return { menuList, active, handleSelect }
  }
})
</script>

<style lang="scss" scoped>
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
    // border-bottom: 1px solid red;
  }
  &-menu {
    flex: 1;
  }
  &-fold {
    height: 44px;
    border-top: 1px solid rgb(255 255 255 / 20%);
  }
  &-icon {
    padding-left: 9px;
    color: #fff;
    width: 14px;
    height: 14px;
  }
}
:deep(.el-menu) {
  border-right: 0;
}
:deep(.el-submenu__title) {
  height: 44px;
  line-height: 44px;
  font-size: $--font-default;
  >span {
    padding-left: 25px;
  }
}
:deep(.el-submenu .el-menu-item){
  height: 44px;
  line-height: 44px;
  font-size: $--font-default;
  >span{
    padding-left: 20px;
  }
}
:deep(.el-menu-item.is-active){
  background: linear-gradient(to left, #5384ff, #68daff) !important;
}
:deep(.el-menu-item:hover){
  background-color: transparent !important;
}
:deep(.el-submenu__title:hover){
  background-color: transparent !important;
}
</style>