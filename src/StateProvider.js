import React, { createContext, useContext, useReducer } from 'react';

// Prepar the dataLayer
export const StateContext = createContext();

// it wrap our App and provide the dataLayer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Pull information from the dataLayer
export const useStateValue = () => useContext(StateContext);

// Now go to index.js and wrap the app into the StateProvider passing as prop also initialState and reducer

// initialState is what the dataLayer looks like
// reducer is how we manipulate the dataLayer information
// how we are able to dispatch action into the dataLayer
// on click addToBasket bottom how are the action going to disatch into the dataLayer?
// and how can I pull these action?

// once we click on the addToBasket bottom we want to add to the dataLayer the new item
