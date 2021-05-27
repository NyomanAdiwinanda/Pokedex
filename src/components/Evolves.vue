<template>
  <div id="detail">
    <div id="title">{{ name }}:</div>
    <div id="container">
      <div class="box">
        <a
          href="#"
          @click.prevent="getPokemonDetail(evolves.species.url, id)"
          >{{ evolves.species.name }}</a
        >
      </div>
      <div class="box">
        <a
          href="#"
          @click.prevent="
            getPokemonDetail(evolves.evolves_to[0].species.url, id)
          "
          >{{ evolves.evolves_to[0].species.name }}</a
        >
      </div>
      <div class="box">
        <a
          href="#"
          @click.prevent="
            getPokemonDetail(
              evolves.evolves_to[0].evolves_to[0].species.url,
              id
            )
          "
          >{{ evolves.evolves_to[0].evolves_to[0].species.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['evolves', 'id', 'name'],

  methods: {
    getPokemonDetail(url) {
      const newUrl = url.replace('pokemon-species', 'pokemon');
      this.$store.dispatch('fetchPokemonDetail', newUrl);
      this.$store.dispatch('fetchEvolutions', url);

      window.scrollTo({
        top: document.body.scrollHeight / 2.25,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styling/colours';
@import '../styling/spacing';

#title {
  font-weight: 800;
}

#container {
  display: flex;
  justify-content: center;
}

.type-box {
  display: inline;
}

.box {
  width: 200px;
  border: 1px solid black;
}

#detail {
  margin-bottom: 20px;
}
</style>
