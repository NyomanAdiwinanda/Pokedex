import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fullList: [],
    pokemonDetail: {},
    evolutions: [],
  },
  mutations: {
    setFullList(state, payload) {
      state.fullList = payload;
    },

    setPokemonDetail(state, payload) {
      state.pokemonDetail = payload;
    },

    setEvolutions(state, payload) {
      state.evolutions = payload;
    },
  },
  actions: {
    fetchFullList(context) {
      axios({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=1118',
        method: 'GET',
      })
        .then(({ data }) => {
          context.commit('setFullList', data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchPokemonDetail(context, payload) {
      axios({
        url: `${payload}`,
        method: 'GET',
      })
        .then(({ data }) => {
          context.commit('setPokemonDetail', data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    fetchEvolutions(context, payload) {
      axios({
        url: `${payload}`,
        method: 'GET',
      })
        .then(({ data }) => {
          return axios({
            url: data.evolution_chain.url,
            method: 'GET',
          });
        })
        .then(({ data }) => {
          context.commit('setEvolutions', data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
