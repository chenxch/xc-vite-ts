<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-17 00:21:41
-->
<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-16 23:56:50
-->
<template>
  <div class="user__block">
    <img src="../../assets/images/user.svg" class="user__img" />
    <el-dropdown class="pl10">
      <span class="el-dropdown-link user__text">
        {{ userName }}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="user__text">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "UserItem",
  setup: () => {
    const store = useStore();
    const userName = ref("admin");
    const text = ref("");
    const typeOptions = reactive([
      {
        label: "主机",
        value: "host",
      },
      {
        label: "网络",
        value: "network",
      },
    ]);
    return { userName, typeOptions, text };
  },
});
</script>

<style lang="scss" scoped>
.user {
  &__block {
    display: flex;
    align-items: center;
  }
  &__img {
    width: 24px;
    height: 24px;
  }
  &__text {
    font-size: $--font-desc !important;
  }
}
</style>