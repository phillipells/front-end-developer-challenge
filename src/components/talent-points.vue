<template>
  <div id="points-total">
    <div class="points-remaining">
      {{ pointsSpent }} / {{ maxPoints }}
    </div>
    <div class="points-text">
      Points Spent
    </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('TalentStore')
export default {
  name: 'TalentPoints',
  computed: {
    ...mapGetters(['getTalentPoints']),
    pointsSpent () {
      return this.getTalentPoints.max - this.getTalentPoints.remaining
    },
    maxPoints () {
      return this.getTalentPoints.max
    }
  }
}
</script>

<style lang="scss" scoped>
#points-total {
  position: absolute;
  left: 40%;
  top: 90%;
  color: rgb(52, 73, 95);
  background-color: rgb(8, 11, 12);
  border: 1px solid rgb(14, 16, 16);
  box-shadow: 0px 0px 6px 1px rgb(33, 38, 43);
  padding: 5px 5px 5px 5px;

  .points-remaining {
    text-align: center;
    color: #ffffff;
  }

  @media (min-width: 800px) {
    position: absolute;
    left: 50%;
    top: 60%;
    padding: 20px 20px 20px 20px;
  }
}
</style>
