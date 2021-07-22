import Vue from 'vue';
import Vuex from 'vuex';
import { mTypes } from './mutation-types';
Vue.use(Vuex);

// Stateの型を定義しておく
export type State = {
  storeCount: number;
};

export default new Vuex.Store({
  // 実際保持されるState
  state: {
    storeCount: 0, //初期値
  },
  mutations: {
    //※コンポネントからは、関数名を文字列で指定するので、定数の型で定義してから使用する
    [mTypes.COUNT_UP](state: State, payload) {
      state.storeCount = payload.storeCount + 1;
    },
    [mTypes.COUNT_DOWN](state: State, payload: { storeCount: number }) {
      state.storeCount = payload.storeCount - 1;
    },
  },
  actions: {},
  modules: {},
});
