const initialState = {
    user: [],
    annonce: [],
    filterCategory:"",
    filterSearch:""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          user: action.payload
        };
        case "GET_ANNONCE":
          return {
            ...state,
            annonce: action.payload
          };
          case "FILTER_CHANGE":
            return {
              ...state,
              filterSearch:action.payload.toLowerCase()}
              
            // return {
            //   ...state,
            // annonce:state.annonce.filter((element, i) =>
            //     element.title.toLowerCase().includes(action.payload.toLowerCase())
            //   )
          case "FILTER_BRAND":
            return { ...state, title: action.payload };
               
          case "FILTER_CATEGORY":
            return {
              ...state,
              filterCategory:action.payload.toLowerCase()              
            };
      
    

      default:
        return state;
    }
  }
  