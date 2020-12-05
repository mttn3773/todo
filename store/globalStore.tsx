import { NextPage } from "next";
import {
  createContext,
  Dispatch,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducers, { IAction, State } from "./reducers";

interface IContext {
  state: State;
  dispatch: Dispatch<IAction>;
}

export const Context = createContext<IContext>({
  state: { notify: {} },
  dispatch: () => {},
});

export const DataProvider: NextPage = ({ children }) => {
  const initialState = { notify: {} };
  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
