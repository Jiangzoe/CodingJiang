import Vue from 'vue';
import Vuex from 'vuex';
// 启用应用状态管理
Vue.use(Vuex);


const state = {
  count: 0
}
// 改变
const mutations = {
  // 只有它可以修改状态
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  }
}

// 动作 不能修改state,可以 读
const actions = {
  increment: ({
    commit
  }) => commit('increment'),
  decrement: ({
    commit
  }) => commit('decrement'),
  incrementIfOdd({
    commit,
    state
  }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync({
    commit
  }) {
    // actions axios 异步取数据
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve();
      }, 2000)
    })

  }
}

const getters = {
  evenOrOdd:state => state.count %2 ===0 ? 'even' : 'odd'
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
