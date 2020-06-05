
const init = {
   username : ''
}

export default ( state = init, action ) => {
   switch (action.type) {
      case 'LOGIN':
         return {username : action.payload}

      case 'LOGOUT':
         
   
      default:
         return state
   }
}