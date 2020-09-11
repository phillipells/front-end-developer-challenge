import Vue from 'vue'
import Vuex from 'vuex'
import TalentStore from './talent-store/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TalentStore
  }
})
