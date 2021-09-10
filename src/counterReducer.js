
const counterReducer=(state, action)=> {
    switch (action) {
      case 'increment':
        return state+1
      case 'decrement':
        return state-1
      case 'reset':
        return 0
      default:
        console.log('Tetooo Patian na kr');;
    }
  }
  export default counterReducer;