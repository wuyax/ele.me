<template>
  <div>
    <ele-header></ele-header>
    <div>
      <router-link to="/goods">goods</router-link>
    </div>
    <div>
      <router-link to="/rating">rating</router-link>
    </div>
    <div>
      <router-link to="/seller">seller</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
export default {
    components: {
      'ele-header': header
    }
}
</script>

<style>

</style>
