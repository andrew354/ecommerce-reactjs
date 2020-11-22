export const initialState = {
	products: [], // 
	basket: [], // action.item state.basket
	user: null   // action.user
};

// SELECTOR
export const getTotalPriceBasket = (basket) => {
	const total = basket?.reduce((total, product) => total + product.price, 0)
	return (total).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
}

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket: [...state.basket, action.item]
			};
		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex( // findIndex() returns the INDEX (a number) of the FIRST element in the array that satisfies the function
				(basketItem) => basketItem.id === action.id
			);
			// console.log(index)
			
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
			};
		case 'SET_PRODUCTS':
			return {
				...state,
				products: action.products
			}
		// case 'ADD_TO_CART':
		// 	const products = state.products
		// 	const check = cart.every(item => {
		// 		return item.id !== 
		// 	})


		default:
			return state;
	}
};

export default reducer;
