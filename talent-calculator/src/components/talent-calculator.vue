<template>
  <div class="talent-calculator">
    <img class="background-image" src="../assets/talent-calc-bg.png" alt="background">
    <div class="talent-title">TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</div>
    <div v-for="path in getTalentPaths" :key="path.id">
      <talent-path :path="path" />
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
  position: relative;

  .talent-title {
    display: flex;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    padding: 5px 10px 5px 10px;
    background-color: rgb(25, 27, 29);
  }
}
</style>
