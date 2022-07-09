<template>
  <div>
    我是二级路由：
    <router-link to="/my/collect">collect</router-link>
    <router-link to="/my/info">info</router-link>
    <router-link to="/my/like">like</router-link>
    <router-link to="/my/part">part</router-link>
    <div style="border: 3px solid red">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "PractiseRouterMy",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>