<template>
  <div class="talent-path">
      <span class="talent-path-name">TALENT PATH {{ path.id }}</span>
      <div v-if="path.id === 1">
        <div
          id="chevron-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(1) }"
          @click="addTalent(1)"
          @click.right="removeTalent(1)"
          @contextmenu.prevent="hideContextMenu"></div>
        <div class="spacer-block" :class="{ 'spacer-block-activated': talentActivated(1) }"></div>
        <div
          id="silverware-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(2) }"
          @click="addTalent(2)"
          @click.right="removeTalent(2)"
          @contextmenu.prevent="hideContextMenu"></div>
          <div class="spacer-block" :class="{ 'spacer-block-activated': talentActivated(2) }"></div>
        <div
          id="cake-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(3) }"
          @click="addTalent(3)"
          @click.right="removeTalent(3)"
          @contextmenu.prevent="hideContextMenu"></div>
          <div class="spacer-block" :class="{ 'spacer-block-activated': talentActivated(3) }"></div>
        <div
          id="crown-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(4) }"
          @click="addTalent(4)"
          @click.right="removeTalent(4)"
          @contextmenu.prevent="hideContextMenu"></div>
      </div>
      <div v-if="path.id === 2">
        <div
          id="beard-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(1) }"
          @click="addTalent(1)"
          @click.right="removeTalent(1)"
          @contextmenu.prevent="hideContextMenu"></div>
          <div class="spacer-block" :class="{ 'spacer-block-activated': talentActivated(1) }"></div>
        <div
          id="snorkel-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(2) }"
          @click="addTalent(2)"
          @click.right="removeTalent(2)"
          @contextmenu.prevent="hideContextMenu"></div>
          <div class="spacer-block" :class="{ 'spacer-block-activated': talentActivated(2) }"></div>
        <div
          id="bolt-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(3) }"
          @click="addTalent(3)"
          @click.right="removeTalent(3)"
          @contextmenu.prevent="hideContextMenu"></div>
          <div class="spacer-block" :class="{ 'spacer-block-activated': talentActivated(3) }"></div>
        <div
          id="skull-talent"
          class="talent-icon"
          :class="{ 'talent-activated': talentActivated(4) }"
          @click="addTalent(4)"
          @click.right="removeTalent(4)"
          @contextmenu.prevent="hideContextMenu"></div>
      </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapGetters } = createNamespacedHelpers('TalentStore')
export default {
  name: 'TalentPath',
  props: {
    path: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  computed: {
    ...mapGetters(['getTalentPoints'])
  },
  methods: {
    ...mapActions(['setTalentPoints', 'addPathLevel', 'removePathLevel']),
    addTalent (level) {
      if (this.getTalentPoints.remaining === 0 ||
        this.path.levels.length === 4 ||
        level !== this.path.levels.length + 1) return

      this.setTalentPoints(this.getTalentPoints.remaining - 1)

      const newPathLevel = {
        id: this.path.id,
        level: 'new level'
      }

      this.addPathLevel(newPathLevel)
    },
    removeTalent (level) {
      if (this.getTalentPoints.remaining === this.getTalentPoints.max ||
        this.path.levels.length === 0 ||
        level !== this.path.levels.length) return

      this.setTalentPoints(this.getTalentPoints.remaining + 1)
      this.removePathLevel(this.path.id)
    },
    talentActivated (level) {
      return level <= this.path.levels.length
    },
    hideContextMenu () {
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.talent-path-name {
  display: inline-flex;
  margin-right: 40px;
  color: rgb(192, 193, 194);
}

.talent-icon {
  display: inline-flex;
  flex: 1;
  width: 50px;
  height: 50px;
  border: 5px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(to bottom, rgb(75, 75, 75), rgb(57, 57, 57));

  &:hover {
    cursor: pointer;
  }
}

.spacer-block {
  display: inline-flex;
  border: 1px solid rgb(30, 33, 35);
  height: 10px;
  width: 50px;
  margin-bottom: 22px;
  background-color: rgb(27, 29, 29);
}

.spacer-block-activated {
  border: 1px solid rgb(65, 66, 67);
  background-color: rgb(48, 50, 52);
}

.talent-activated {
  border-image-source: linear-gradient(to bottom, rgb(110, 171, 233), rgb(36, 58, 79));
  box-shadow: 0px 0px 6px 5px rgb(33, 38, 43);
}

#chevron-talent {
  background: url(../assets/talent-icons-sprite.png) 0 -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) 0 0;
  }
}

#silverware-talent {
  background: url(../assets/talent-icons-sprite.png) -50px -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) -50px 0;
  }
}

#cake-talent {
  background: url(../assets/talent-icons-sprite.png) -100px -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) -100px 0;
  }
}

#crown-talent {
  background: url(../assets/talent-icons-sprite.png) -150px -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) -150px 0;
  }
}

#beard-talent {
  background: url(../assets/talent-icons-sprite.png) -200px -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) -200px 0;
  }
}

#snorkel-talent {
  background: url(../assets/talent-icons-sprite.png) -250px -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) -250px 0;
  }
}

#bolt-talent {
  background: url(../assets/talent-icons-sprite.png) -300px -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) -300px 0;
  }
}

#skull-talent {
  background: url(../assets/talent-icons-sprite.png) -350px -50px;

  &:hover {
    background: url(../assets/talent-icons-sprite.png) -350px 0;
  }
}
</style>
