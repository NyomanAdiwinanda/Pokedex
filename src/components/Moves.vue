<template>
  <div id="detail">
    <div id="title">{{ name }}:</div>
    <div class="container">
      <div class="type-box" v-for="move in moves" :key="move">
        {{ move.move.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['moves', 'name'],
};
</script>

<style lang="scss" scoped>
@import '../styling/colours';
@import '../styling/spacing';

#title {
  font-weight: 800;
}

.type-box {
  margin: 5px 0;
}

.container {
  height: 250px;
  overflow-y: scroll;
}

#detail {
  margin-bottom: 20px;
}
</style>
