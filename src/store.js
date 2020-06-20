import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import TestService from '@/controllers/TestService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    directors: [],
    events: [],
    test: Object()
  },
  getters: {

  },
  mutations: {
    FETCH_DIRECTORS (state, directors) {
      state.directors = directors
    },
    FETCH_EVENTS (state, events) {
      state.events = events
    },
    FETCH_TEST (state, test) {
      state.test = test
    }
  },
  actions: {
    fetchDirectors ({ commit }) {
      axios.get(`${process.env.VUE_APP_BACKEND}/directors`)
        .then((response) => {
          commit('FETCH_DIRECTORS', response.data)
          // self.filterDirectors()
        })
        // .catch(error => {
        //   console.error(error)
        // })
    },
    fetchEvents ({ commit }) {
      axios.get(`${process.env.VUE_APP_BACKEND}/events?short=1`)
        .then((response) => {
          commit('FETCH_EVENTS', response.data)
          // self.filterDirectors()
        })
        // .catch(error => {
        //   console.error(error)
        // })
    },
    async fetchTest ({ commit }, user) {
      try {
        let test = await TestService.get(user.id, user.token)
        commit('FETCH_TEST', test)
      } catch (err) {
        if (err.response.status === 403) {
          throw err.response.status
        }
        // console.error(Object.keys(err.response.status))
      }
    }
  }
})
