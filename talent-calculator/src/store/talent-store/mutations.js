export default {
  setTalentPoints (state, payload) {
    state.talentPoints.remaining = payload
  },
  addPathLevel (state, payload) {
    console.log(payload)
    const talentIndex = state.talentPaths.findIndex((path) => {
      return path.id === payload.id
    })

    state.talentPaths[talentIndex].levels.push(payload.level)
  },
  removePathLevel (state, payload) {
    console.log(payload)
    const talentIndex = state.talentPaths.findIndex((path) => {
      return path.id === payload
    })

    state.talentPaths[talentIndex].levels.pop()
  }
}
