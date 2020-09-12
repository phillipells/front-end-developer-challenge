<template>
  <div class="talent-calculator">
    <div class="talent-title">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</div>
    <div class="talent-paths">
      <div v-for="path in getTalentPaths" :key="path.id">
        <talent-path class="talent-path" :path="path" />
      </div>
    </div>
    <talent-points />
  </div>
</template>

<script>
import TalentPath from './talent-path'
import TalentPoints from './talent-points'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('TalentStore')

export default {
  name: 'TalentCalculator',
  components: {
    TalentPath,
    TalentPoints
  },
  computed: {
    ...mapGetters(['getTalentPaths'])
  }
}
</script>

<style scoped lang="scss">
.talent-calculator {
  // position: relative;
  display: flex;
  flex-direction: column;

  .talent-title {
    display: inline-flex;
    position: absolute;
    left: 50%;
    top: 8%;
    transform: translate(-50%, -50%);
    padding: 5px 10px 5px 10px;
    background-color: rgb(25, 27, 29);
    text-align: center;

    @media (min-width: 800px) {
      position: relative;
      flex-direction: row;
      display: block;
      top: 10%;
    }
  }

  .talent-paths {
    display: inline-flex;
    position: absolute;
    align-items: center;
    top: 15%;
    left: 27%;

    .talent-path {
      align-items: center;
      margin-bottom: 20px;
      width: 50%;

      @media (min-width: 800px) {
        display: flex;
        width: auto;
      }
    }

    @media (min-width: 800px) {
      position: relative;
      flex-direction: row;
      display: block;
      top: 30%;
      left: 5%;
    }
  }
}
</style>
