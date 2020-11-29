
const MAIN = 'MAIN'

const INITIAL_STATE = {
  main: 0
}

export default function Main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAIN: 
      return state
    default:
      return state
  }
}