const initialState = {
    name: '',
    mail: ''
  };
  
  const setUserNameMail = (state = initialState, action) => {
    switch (action.type) {
      case "SNAME":
        return {
          ...state,
          name: action.payloadName,
          mail: action.payloadMail
        };
      default:
        return state;
    }
  }
  
  export default setUserNameMail;
  