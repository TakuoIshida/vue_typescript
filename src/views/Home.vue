<template>
  <div class="home">
    <!-- assets public webpackでググる -->
    <!-- 写真など大きい静的ファイルはpublic, 小さい画像はassetsに。 -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- msg をpropsで値を渡している -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; 
// @ is an alias to /src
// @ で、/srcからのimportをかける。※統一すること

// 上のtemplateで使用するコンポネントを宣言する
@Component({
  components: {
    HelloWorld
  }
})
// Vue本体を継承したHomeコンポネントを外部にexportする
export default class Home extends Vue {}
</script>
