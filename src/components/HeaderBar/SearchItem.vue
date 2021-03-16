<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-16 23:56:50
-->
<template>
  <div>
    <el-select
      v-model="type"
      placeholder="请选择"
      class="search__select"
      size="mini"
    >
      <el-option
        v-for="item in typeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
    <el-input
      v-model="text"
      size="mini"
      suffix-icon="bo-icon-search"
      class="search__input"
    ></el-input>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "SearchItem",
  setup: () => {
    const store = useStore();
    const type = ref("host");
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
    return { type, typeOptions, text };
  },
});
</script>

<style lang="scss" scoped>
.search {
  &__select {
    width: 88px;
    :deep(.el-input__inner) {
      border-radius: 20px 0 0 20px;
      border-right: 0;
      background-color: #f5f6fa;
      border-color: #dcdfe6 !important;
    }
  }
  &__input {
    width: 176px;
    :deep(.el-input__inner) {
      border-radius: 0 20px 20px 0;
      border-left: 0;
      border-color: #dcdfe6 !important;
    }
  }
}
</style>