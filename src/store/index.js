import Vue from 'vue'
import Vuex from 'vuex'
import {pieData} from '../data.js'
import {mapData} from '../mapData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pieData: pieData,
    mapData: mapData,
    currentPie: null,
    showAbout: false
  },
  mutations: {
    changeCurrentPie(state, newPie){
      state.currentPie = newPie
    },
    toggleAbout(state, toggle){
      state.showAbout = toggle
    }
  },
  actions: {
  },
  modules: {
  }
})
