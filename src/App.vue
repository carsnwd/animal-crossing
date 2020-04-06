<template>
  <div id="app">
    <p>
      <router-link to="/bugs">Bugs</router-link>
      <router-link to="/fish">Fish</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

</style>
