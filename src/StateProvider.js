import React, {createContext, useReducer, useContext} from 'react';

//prepare the datalayer
export const StateContext = createContext();

//this will wrap our app and provide the data layer to every component in our app
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
