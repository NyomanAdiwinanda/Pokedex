<template>
  <div id="detail">
    <div id="title">{{ name }}:</div>
    <div class="type-box">{{ height }} Inches</div>
  </div>
</template>

<script>
export default {
  props: ['height', 'name'],
};
</script>

<style lang="scss" scoped>
@import '../styling/colours';
@import '../styling/spacing';

#title {
  font-weight: 800;
}

.type-box {
  display: inline;
}

#detail {
  margin-bottom: 20px;
}
</style>
