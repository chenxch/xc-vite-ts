<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-16 23:18:56
-->
<template>
  <div class="header">
    <div class="header__title">
      <i class="el-icon-back header__back" />
      <span>主机监控</span>
    </div>
    <div class="header__search">
      <search-item></search-item>
    </div>
    <div class="header__help">
      <i class="bo-icon-read header__icon"></i>
    </div>
    <div class="header__user pl30">
      <user-item></user-item>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import SearchItem from './SearchItem.vue'
import UserItem from './UserItem.vue'

export default defineComponent({
  name: 'HeaderBar',
  components: {
    SearchItem,
    UserItem
  },
  setup: () => {
    const store = useStore()

    return {}
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 100%;
  &__title {
    flex: 1;
    font-size: $--font-title-2;
  }
  &__search {
  }
  &__help {
    font-size: $--font-title-3;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-right: 1px solid $--border-color-defalut;
  }
  &__icon {
    cursor: pointer;
  }
  &__back {
    cursor: pointer;
    color: $--color-primary;
    font-weight: bold;
  }
  &__user {
  }
}
</style>