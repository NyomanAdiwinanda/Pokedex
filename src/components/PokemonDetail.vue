<template>
  <div>
    <br />
    <h1>Pokedex</h1>
    <br />
    <h3>{{ pokemonDetail.name }}</h3>
    <div id="description-container">
      <img id="pokemon-sprite" :src="pokemonDetail.sprites.front_default" />
    </div>

    <!-- make each information get from the API modular by seperates then into components for easier modification in the future -->
    <!-- Pass the information needed via props -->
    <Types :types="pokemonDetail.types" name="Types" />
    <Height :height="pokemonDetail.height" name="Height" />
    <Weight :weight="pokemonDetail.weight" name="Weight" />
    <Abilities :abilities="pokemonDetail.abilities" name="Abilities" />
    <Stats :stats="pokemonDetail.stats" name="Stats" />
    <Moves :moves="pokemonDetail.moves" name="Moves" />
    <Evolves :evolves="evolutions.chain" :id="evolutions.id" name="Evolution" />
  </div>
</template>

<script>
import Types from './Types.vue';
import Height from './Height.vue';
import Weight from './Weight.vue';
import Abilities from './Abilities.vue';
import Stats from './Stats.vue';
import Moves from './Moves.vue';
import Evolves from './Evolves.vue';

export default {
  components: {
    Types,
    Height,
    Weight,
    Abilities,
    Stats,
    Moves,
    Evolves,
  },

  computed: {
    // code below is to get the state from the vuex store
    pokemonDetail() {
      return this.$store.state.pokemonDetail;
    },

    evolutions() {
      return this.$store.state.evolutions;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styling/colours';
@import '../styling/spacing';

#pokemon-sprite {
  margin: 0 auto;
  display: block;
  padding: $md;
}
</style>
