import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      blogs: []
    },
    mutations: {
      saveData(state, data) {
        state.blogs.push(data)
      },
    },
})}

export default createStore
