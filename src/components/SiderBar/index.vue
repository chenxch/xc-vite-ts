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
          <template #title>
            <i class="saas__icon" :class="menu.ico"></i>
            <span>{{ menu.name }}</span>
          </template>

          <el-menu-item :index="childMenu.path" v-for="childMenu in menu.children" :key="childMenu.id">
            <span>{{ childMenu.name }}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
    <div class="saas__fold">
      <i
        class="saas__fold__icon pl20"
        :class="isCollapse ? 'bo-icon-unfold-right' : 'bo-icon-fold-left'"
        @click="hanldeCollapse"
      />
    </div>
  </el-aside>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SiderBar',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const store = useStore()
    const active = ref('/home')
    const isCollapse = computed(() => store.state.collapse)
    const menuList = reactive([
      {
        id: 1,
        ico: 'bo-icon-saas_default',
        path: '',
        name: '监控场景',
        children: [
          {
            id: 2,
            path: '/home',
            name: '主机监控'
          },
          {
            id: 3,
            path: '/about',
            name: '数据监控'
          }
        ]
      }
    ])
    const handleSelect = (index: string) => {
      active.value = index
    }
    const hanldeCollapse = () => {
      store.commit('setCollapse', !isCollapse.value)
    }
    return {
      menuList,
      active,
      isCollapse,
      handleSelect,
      hanldeCollapse
    }
  }
})
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
</style>
<style lang="scss">
.el-submenu__title {
  height: 44px !important;
  line-height: 44px !important;
  font-size: $--font-default !important;
  > span {
    padding-left: 25px !important;
  }
}
.el-menu-item {
  height: 44px !important;
  line-height: 44px !important;
  font-size: $--font-default !important;
  > span {
    padding-left: 20px !important;
  }
}
.el-popper.is-light {
  border: 0 !important;
}
.el-submenu .el-menu-item {
  height: 44px !important;
  line-height: 44px !important;
  font-size: $--font-default !important;
  > span {
    padding-left: 20px !important;
  }
}
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
