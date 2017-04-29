export default function combineEvents(reducers, initialState): Function {
  return (state = initialState, event) => {
    if (reducers.hasOwnProperty(event.type)) {
      return reducers[event.type](state, event)
    } else if (reducers.hasOwnProperty('default')) {
      return reducers.default(state, event)
    } else {
      return state
    }
  }
}