import { ADD_PLATE, DELETE_PLATE } from "./contants";

const initialState = {
  plates: [],
};
const reducer = function (state = initialState, action) {
  if (action.type === ADD_PLATE) {
    const plateCart = state.plates.find(plate => plate.name === action.payload.name)
    return plateCart ? {
      ...state,
      plates: state.plates.map(plate => plate.name === action.payload.name ? 
        {...plate, quantity:plate.quantity + 1 } : plate )
    }: 
    { ...state, plates: [...state.plates, {...action.payload, quantity: 1 } ]};

  }else if(action.type === DELETE_PLATE){
    const plateCartDelete = state.plates.find(plate => plate.name === action.payload.plate)    
    return plateCartDelete.quantity > 1 ? {
      ...state,
      plates: state.plates.map(plate => plate.name === action.payload.plate ?
        {...plate, quantity: plate.quantity - 1} : plate)
    }:{
      ...state,
      plates: state.plates.filter(plate => plate.name !== action.payload.plate)
    }
  }
  return state;
};

export default reducer;