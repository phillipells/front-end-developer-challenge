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
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 80%;
  top: 50%;
  color: rgb(52, 73, 95);
  background-color: rgb(8, 11, 12);
  border: 1px solid rgb(14, 16, 16);
  padding: 20px 20px 20px 20px;

  .points-remaining {
    text-align: center;
    color: #ffffff;
  }
}
</style>
