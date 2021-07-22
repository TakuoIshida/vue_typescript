<template>
  <div class="home">
    <!-- assets public webpackでググる -->
    <!-- 写真など大きい静的ファイルはpublic, 小さい画像はassetsに。 -->
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- msg をpropsで値を渡している -->
    <div>dataのCount：{{dataCount}}</div>
    <div>storeのCount：{{getStoreCount}}</div>
    <button @click="countUpData">dataCount ++</button>
    <button @click="countDownData">dataCount --</button>
    <button @click="countUpStore">storeCount ++</button>
    <button @click="countDownStore">storeCount --</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {State} from "../store"
import {mTypes} from '../store/mutation-types'

type DataType = {
  dataCount: number;
};
export default Vue.extend({
  data(): DataType {
    return {
      dataCount: 0,
    };
  },
  computed: {
    getStoreCount(): number {
    console.log(this.$store.state);
    // Vueは、storeに対して型補完が効かない（相性が悪い）ため、自作したStateで型キャストする
    return (this.$store.state as State).storeCount
    }
  },
  methods: {
    countUpData(): void {
      this.dataCount++
    },
    countDownData(): void {
      this.dataCount--
    },
    countUpStore(): void {
      this.$store.commit(mTypes.COUNT_UP, {storeCount: this.getStoreCount})
    },
    countDownStore(): void {
      this.$store.commit(mTypes.COUNT_DOWN, {storeCount: this.getStoreCount})
    },
  }
});
</script>
