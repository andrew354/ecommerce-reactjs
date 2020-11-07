export const initialState = {
	basket: [], // action.item state.basket
	user: null  // action.user
};


const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			// console.log(index)
			// findIndex() returns the INDEX (a number) of the FIRST element in the array that satisfies the function
			let newBasket = [...state.basket];
			if (index >= 0) { // if it's >= 0 it mean that it found the index
				newBasket.splice(index, 1); // splice() remove the itam from the array based on the index
			} else {
				console.warn(`Cannot remove it: ${action.id} not present`);
			}
			return {
				...state,
				basket: newBasket,
			};
		case 'SET_USER':
			return {
				...state,
				user: action.user
			}


		default:
			return state;
	}
};

export default reducer;
