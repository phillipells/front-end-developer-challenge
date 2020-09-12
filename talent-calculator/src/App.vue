<template>
  <div id="app">
    <img class="background-image" src="./assets/talent-calc-bg.png" alt="background">
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
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  // display: flex;
  color: #FFFFFF;
  // flex-direction: column;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }

  .background-image {
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    position: fixed;
  }

  @media (min-width: 800px) {
    position: relative;
    flex-direction: row;
  }
}
</style>
