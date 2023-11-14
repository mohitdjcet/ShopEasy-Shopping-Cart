
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,SET_ITEMS,UPDATE_CART_COUNT} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const setItems = (items) => {
    return {
      type: 'SET_ITEMS',
      payload: items,
    };
  };

  export const fetchItems = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/api/items')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setItems(data));
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    };
  };


  export const updateCartCount = (count) => {
    return {
        type: UPDATE_CART_COUNT,
        payload: count,
    };
};