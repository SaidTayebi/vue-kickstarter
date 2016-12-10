import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import signup from './signup'
import currentUser from './signin'
import courses from './courses'
import users from './users'

const plugins = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

Vue.use(Vuex)

export default new Vuex.Store({
  // Prevents components to directly mutate Vuex store state.
  // Turn off in production to avoid performance cost due to deep watch on the state tree
  strict: process.env.NODE_ENV !== 'production',
  plugins,
  modules: {
    signup,
    currentUser,
    courses,
    users
  }
})
