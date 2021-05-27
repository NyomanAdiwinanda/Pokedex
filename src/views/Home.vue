<template>
  <b-container fluid>
    <div id="pokedex-container">
      <b-row>
        <b-col>
          <SearchBar />
        </b-col>
        <b-col>
          <PokemonDetail />
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import PokemonDetail from '../components/PokemonDetail.vue';

export default {
  components: {
    SearchBar,
    PokemonDetail,
  },
};
</script>

<style lang="scss" scoped>
@import '../styling/colours';
@import '../styling/spacing';

h2 {
  font-size: 14px;
  font-weight: bold;
  color: $white;
}

h4 {
  font-size: 14px;
  font-weight: bold;
}

@media only screen and (max-width: 810px) {
  .pokemon-evol-sprite-container {
    float: none;
  }

  #pokemon-info-panel {
    margin-bottom: $md;
  }
}
</style>
