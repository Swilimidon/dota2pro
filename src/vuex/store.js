import Vue from 'vue'
import Vuex from 'vuex'
import vuexCache from 'vuex-cache'
import axios from 'axios'

Vue.use(Vuex)

let OPENDOTA_API_URI = 'https://api.opendota.com/api'

const store = new Vuex.Store({
  state: {
    heroes: []
  },
  plugins: [vuexCache],
  actions: {
    async LOAD_HEROES ({ commit }) {
      if (window.sessionStorage.getItem('heroes') === null) {
        await axios.get(OPENDOTA_API_URI + '/heroStats', {
          validateStatus: function (status) {
            return status < 500 // Reject only if the status code is greater than or equal to 500
          }
        })
          .then((resp) => {
            // commit('SET_HEROES', { list: resp.data.sort((a, b) => (a.localized_name > b.localized_name) ? 1 : (a.localized_name < b.localized_name) ? -1 : 0) })
            window.sessionStorage.setItem('heroes', JSON.stringify({ list: resp.data.sort((a, b) => (a.localized_name > b.localized_name) ? 1 : (a.localized_name < b.localized_name) ? -1 : 0) }))
            commit('SET_HEROES', JSON.parse(window.sessionStorage.getItem('heroes')))
          })
          .catch((err) => {
            err.response ? (console.log(err.response.data),
                console.log(err.response.status),
                console.log(err.response.headers)
            ) : err.request ? console.log(err.request) : console.log('Error', err.message)
//            self.danger(err.message)
            console.log(err.config)
          })
      } else {
        // commit('SET_HEROES', { list: resp.data.sort((a, b) => (a.localized_name > b.localized_name) ? 1 : (a.localized_name < b.localized_name) ? -1 : 0) })
        commit('SET_HEROES', JSON.parse(window.sessionStorage.getItem('heroes')))
      }
    }
  },
  mutations: {
    SET_HEROES: (state, { list }) => {
      state.heroes = list
    }
  },
  getters: {
    openProjects: state => {
      return state.heroes
    }
  }
})

export default store
