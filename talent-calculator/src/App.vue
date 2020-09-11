<template>
  <div id="app">
    <talent-calculator />
  </div>
</template>

<script>
import TalentCalculator from './components/talent-calculator.vue'

export default {
  name: 'App',
  components: {
    TalentCalculator
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  color: #FFFFFF;
}
</style>
