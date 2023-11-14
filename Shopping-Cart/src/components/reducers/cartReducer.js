import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SET_ITEMS,UPDATE_CART_COUNT } from '../actions/action-types/cart-actions';

const initState = {
    items: [], // Items fetched from API
    addedItems: [], // Items added to the cart
    total: 0,
    shipping: 0,
    cartCount: 0,
};

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload,
            };
        case ADD_TO_CART:
            const addedItem = state.items.find(item => item.id === action.id);
            const existedItem = state.addedItems.find(item => action.id === item.id);

            if (existedItem) {
                addedItem.quantity += 1;
                return {
                    ...state,
                    total: state.total + addedItem.price,
                };
            } else {
                addedItem.quantity = 1;
                const newTotal = state.total + addedItem.price;
                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal,
                };
            }
        case REMOVE_ITEM:
            const itemToRemove = state.addedItems.find(item => action.id === item.id);
            const newItems = state.addedItems.filter(item => action.id !== item.id);
            const newTotal = state.total - itemToRemove.price * itemToRemove.quantity;

            return {
                ...state,
                addedItems: newItems,
                total: newTotal,
                cartCount: 0,
            };
        case ADD_QUANTITY:
            const addedItemQuantity = state.addedItems.find(item => item.id === action.id);
            addedItemQuantity.quantity += 1;
            const addedQuantityTotal = state.total + addedItemQuantity.price;

            return {
                ...state,
                total: addedQuantityTotal
            };
        case SUB_QUANTITY:
            const subtractItemQuantity = state.addedItems.find(item => item.id === action.id);

            if (subtractItemQuantity.quantity === 1) {
                const newItems = state.addedItems.filter(item => item.id !== action.id);
                const newTotal = state.total - subtractItemQuantity.price;

                return {
                    ...state,
                    addedItems: newItems,
                    total: newTotal
                };
            } else {
                subtractItemQuantity.quantity -= 1;
                const subtractedQuantityTotal = state.total - subtractItemQuantity.price;

                return {
                    ...state,
                    total: subtractedQuantityTotal,
                };
            }
        case ADD_SHIPPING:
            return {
                ...state,
                shipping: 6,
                total: state.total + 6,
            };

            case UPDATE_CART_COUNT:
                return {
                    ...state,
                    cartCount: action.payload,
                };
        default:
            return state;
    }
};

export default cartReducer;
