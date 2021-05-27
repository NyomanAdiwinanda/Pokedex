<template>
  <div id="detail">
    <div id="title">{{ name }}:</div>
    <div id="container">
      <div class="box">Hp: {{ stats[0].base_stat }}</div>
      <div class="box">Attack: {{ stats[1].base_stat }}</div>
      <div class="box">Defense: {{ stats[2].base_stat }}</div>
    </div>
    <div id="container">
      <div class="box">Special-Attack: {{ stats[3].base_stat }}</div>
      <div class="box">Special-Defense: {{ stats[4].base_stat }}</div>
      <div class="box">speed: {{ stats[5].base_stat }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stats', 'name'],
};
</script>

<style lang="scss" scoped>
@import '../shared/colours';
@import '../shared/spacing';

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
