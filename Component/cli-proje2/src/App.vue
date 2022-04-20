<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <hello msg="Welcome to Your Vue.js App"/>
  <count-button></count-button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CountButton from './components/CountButton.vue'

export default {
  name: 'App',
  components: {
    hello: HelloWorld,
    'count-button': CountButton,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
