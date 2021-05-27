<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  /**
   * The goal for codes below is for:
   * 1) when the app is loaded, it will automatically fetch all pokemon name from the API
   * 2) fetch pokemon detail data with id of 1 for the initial state of pokemon detail --> will load bulbasaur for the first time
   * 3) fetching evolutions data with pokemon-species of id 1 for the initial state of evolutions --> will give bulbasaur, ivysaur, and venusaur for the first time
   */
  created() {
    this.$store.dispatch('fetchFullList');
    this.$store.dispatch(
      'fetchPokemonDetail',
      'https://pokeapi.co/api/v2/pokemon/1/'
    );
    this.$store.dispatch(
      'fetchEvolutions',
      'https://pokeapi.co/api/v2/pokemon-species/1/'
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
