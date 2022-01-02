import React from 'react';

const initialState = {
  loading: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'START_LOADING':
      return { ...state, loading: true };
    case 'STOP_LOADING':
      return { ...state, loading: false };
    default:
      throw new Error(`Can't recognize the action ${type}`);
  }
};

export const StateContext = React.createContext({});

export const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
