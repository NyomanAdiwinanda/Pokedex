<template>
  <div id="detail">
    <div id="title">{{ name }}:</div>
    <div class="type-box" v-for="(ability, index) in abilities" :key="ability">
      {{
        index === abilities.length - 1
          ? ability.ability.name
          : `${ability.ability.name},`
      }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['abilities', 'name'],
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
