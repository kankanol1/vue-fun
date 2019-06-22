import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//定义状态
const state={
  count:1,
  number:0
}
//定义操作
const mutations={
  //传递参数
  add(state,n){
    state.number++
    state.count=state.count+n
  },
  reduce(state){
    state.count--
    state.number--
  }
}
//过滤操作
const getters={
  count:function (state) {
    return state.count+=100
  }
}
//异步修改状态
const actions={
  addAction(context){
    setTimeout(function () {
      console.log('异步执行 add')
    },3000);
    context.commit('add',100)
  },
  reduceAction(context){
    context.commit('reduce')
    console.log('异步执行 reduce')
  }
}

//模块组  使用也太复杂了
const module1={

}
//封装代码 外部可以引用
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
