/*
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-03-16 16:29:36
 */
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      collapse: false,
    };
  },
  mutations: {
    setCollapse(state: any, data) {
      state.collapse = data;
    },
  },
  actions: {
    setCollapse(context,data) {
      context.commit("setCollapse", data);
    },
  },
});
