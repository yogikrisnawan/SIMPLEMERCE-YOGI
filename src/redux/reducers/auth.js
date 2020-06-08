
const init = {
   username : '',
   token: ''
}

export default ( state = init, action ) => {
   switch (action.type) {
      case 'LOGIN':
         return {username : action.payload.username, token : action.payload.token}

      case 'LOGOUT':
         
   
      default:
         return state
   }
}