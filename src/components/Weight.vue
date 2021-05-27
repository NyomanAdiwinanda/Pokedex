<template>
  <div id="detail">
    <div id="title">{{ name }}:</div>
    <div class="type-box">{{ weight }} Pound</div>
  </div>
</template>

<script>
export default {
  props: ['weight', 'name'],
};
</script>

<style lang="scss" scoped>
@import '../shared/colours';
@import '../shared/spacing';

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
