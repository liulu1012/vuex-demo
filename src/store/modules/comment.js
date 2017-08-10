import * as types from '../mutation-types'

let state = {all: []}

const mutations = {
  [types.ADD_COMMENT] (state, { text }) {
    state.all.push({ text })
  }
}

export default {
  state,
  mutations
}
