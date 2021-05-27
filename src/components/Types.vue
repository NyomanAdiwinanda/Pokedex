<template>
  <div id="detail">
    <div id="title">{{ name }}:</div>
    <div class="type-box" v-for="(type, index) in types" :key="type">
      {{ index === types.length - 1 ? type.type.name : `${type.type.name},` }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['types', 'name'],
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
