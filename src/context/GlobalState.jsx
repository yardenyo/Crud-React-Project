import React, { createContext, useReducer } from 'react';
import reducer from './AppReducer';

const initialState = {
  users: [
    {
      key: 1,
      id: 308345602,
      fname: "Yarden",
      lname: "Yosef"
    }
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUser = (user) => {
    dispatch({
      type:'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type:'EDIT_USER',
      payload: user
    })
  }

  const removeUser = (id) => {
    dispatch({
      type:'REMOVE_USER',
      payload: id
    })
  }

  const removeAll = () => {
    dispatch({
      type:'REMOVE_ALL'
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      addUser,
      removeUser,
      editUser,
      removeAll
    }}>
      {children}
    </GlobalContext.Provider>
  )
}