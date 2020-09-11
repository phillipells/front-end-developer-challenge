<template>
  <div id="points-total">
    <div class="points-remaining">
      {{ remainingPoints }} / {{ maxPoints }}
    </div>
    <br />
      Points Spent
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('TalentStore')
export default {
  name: 'TalentPoints',
  computed: {
    ...mapGetters(['getTalentPoints']),
    remainingPoints () {
      return this.getTalentPoints.remaining
    },
    maxPoints () {
      return this.getTalentPoints.max
    }
  }
}
</script>

<style lang="scss" scoped>
#points-total {
  display: inline-flex;
  position: absolute;
  left: 80%;
  top: 50%;
  color: rgb(52, 73, 95);
  background-color: rgb(8, 11, 12);
  border: 1px solid rgb(14, 16, 16);
  padding: 10px 10px 10px 10px;

  .points-remaining {
    color: #ffffff;
  }
}
</style>
