<!--
 * @Description:  
 * @Author: chenxch
 * @Date: 2021-03-15 15:43:05
-->
<template>
  <el-aside :width="isCollapse ? '70px' : '200px'" class="saas__aside">
    <div class="saas__img">
      <img src="../../assets/images/menu-collapse.png" v-show="isCollapse" />
      <img src="../../assets/images/menu.png" v-show="!isCollapse" />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper" class="saas__menu">
      <el-menu
        :default-active="active"
        background-color="#213077"
        text-color="#fff"
        active-text-color="#101945"
        @select="handleSelect"
        :collapse="isCollapse"
        router
      >
        <el-submenu :index="menu.path" v-for="menu in menuList" :key="menu.id">
          <template #title
            ><i class="saas__icon" :class="menu.ico"></i>
            <span>{{ menu.name }}</span></template
          >

          <el-menu-item
            :index="childMenu.path"
            v-for="childMenu in menu.children"
            :key="childMenu.id"
          >
            <span>{{ childMenu.name }}</span></el-menu-item
          >
        </el-submenu>
      </el-menu>
    </el-scrollbar>
    <div class="saas__fold">
      <i
        class="saas__fold__icon pl20"
        :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        @click="hanldeCollapse"
      />
    </div>
  </el-aside>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const active = ref("/home");
    const isCollapse = ref(false);
    const menuList = reactive([
      {
        id: 1,
        ico: "el-icon-message",
        path: "",
        name: "监控场景",
        children: [
          {
            id: 2,
            path: "/home",
            name: "主机监控",
          },
          {
            id: 3,
            path: "/about",
            name: "数据监控",
          },
        ],
      },
    ]);
    const handleSelect = (index: string) => {
      active.value = index;
    };
    const hanldeCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };
    return { menuList, active, isCollapse, handleSelect, hanldeCollapse };
  },
});
</script>

<style lang="scss" scoped>
.saas {
  &__main {
    width: 100%;
    height: 100%;
  }
  &__aside {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: $--aside-bg-color;
  }
  &__img {
    height: 78px;
    // border-bottom: 1px solid red;
  }
  &__menu {
    flex: 1;
    :deep(.is-horizontal) {
      display: none !important;
    }
  }
  &__fold {
    height: 44px;
    line-height: 44px;
    border-top: 1px solid rgb(255 255 255 / 20%);
    &__icon {
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
  &__icon {
    padding-left: 9px;
    color: #fff;
    font-size: 16px;
  }
}
:deep(.el-menu) {
  border-right: 0;
}
:deep(.el-submenu__title) {
  height: 44px;
  line-height: 44px;
  font-size: $--font-default;
  > span {
    padding-left: 25px;
  }
}
:deep(.el-submenu .el-menu-item) {
  height: 44px;
  line-height: 44px;
  font-size: $--font-default;
  > span {
    padding-left: 20px;
  }
}
</style>
<style lang="scss">
.el-menu-item.is-active {
  background: linear-gradient(to left, #5384ff, #68daff) !important;
}
.el-menu-item:hover {
  background-color: transparent !important;
}
.el-submenu__title:hover {
  background-color: transparent !important;
}
.el-submenu__title i {
  color: #fff;
}
</style>
