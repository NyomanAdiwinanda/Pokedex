import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // fullList is the state of all available pokemons name in the API
    fullList: [],

    // pokemonDetail will contain every detail for each one pokemon, it will be replaced when the new pokemon get clicked
    pokemonDetail: {},

    // will contain the evolutions of current clicked pokemon
    evolutions: [],
  },
  mutations: {
    // Code below is to change the state above

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
    // fetch all pokemon name from the API
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

    // fetch pokemon detail
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

    // fetchEvolutions detail
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
