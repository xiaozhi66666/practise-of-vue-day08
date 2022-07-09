<template>
  <div>
    <div>
      <router-link to="/my/collect/shop/computer">computer</router-link>
      <router-link to="/my/collect/shop/cussor">cussor</router-link>
      <router-link to="/my/collect/shop/pannel">pannel</router-link>
    </div>
    <div style="border: 3px solid yellow">
      我是四级路由：<router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "PractiseRouterShop",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>