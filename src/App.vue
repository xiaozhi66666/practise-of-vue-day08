<template>
  <div>
    我是一级路由：
    <router-link to="/my">my</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/assort">assort</router-link>
    <router-link to="/order">order</router-link>
    <div style="border: 3px solid blue">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "PractiseRouterApp",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>