<template>
  <div class="panel panel-default">
    <div id="table-overflow">
      <b-form-input
        id="search-bar"
        v-model="filter"
        placeholder="Type to search..."
      />
      <div id="table-container">
        <b-table
          hover
          class="pokedex-table table-borderless"
          :fields="fields"
          :items="fullList"
          :filter="filter"
          v-on:row-clicked="(item) => getPokemonDetail(item.url)"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      fields: [{ key: 'name', sortable: true }],
      sortBy: 'id',
      sortDesc: false,
      filter: null,
    };
  },

  computed: {
    fullList() {
      return this.$store.state.fullList;
    },
  },

  methods: {
    getPokemonDetail(url) {
      this.$store.dispatch('fetchPokemonDetail', url);

      const newUrl = url.replace('pokemon', 'pokemon-species');
      this.$store.dispatch('fetchEvolutions', newUrl);

      window.scrollTo({
        top: document.body.scrollHeight / 2.5,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styling/colours';
@import '../styling/spacing';

.panel {
  padding: $xl $xl 0 $xl;
}

/* Search table */
#table-overflow {
  overflow: hidden;
}

#table-container {
  height: 80vh;
  width: 100%;
  border: none;
  overflow: auto;
  background: $white;
}

#table-container::-webkit-scrollbar {
  display: none;
}

.pokedex-table {
  padding: $lg;
  background: $white;
  cursor: pointer;
}

/* Search bar */
#search-bar {
  width: 100%;
  margin: 0 0 $lg 0;
  border: none;
  border-bottom: 3px solid lighten($grey, 28%);
  border-radius: 0;
  padding: $lg;
  background: lighten($grey, 28%);
  transition: border 0.2s linear;
}

#search-bar,
#search-bar:focus,
#search-bar::placeholder {
  color: $grey;
}

#search-bar:focus {
  border-bottom: 3px solid lighten($grey, 15%);
}

.form-control {
  box-shadow: none;
}
</style>
