import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 開発中はtrueにする（エラーなどのコンソール情報を多く吐き出すため）
Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
