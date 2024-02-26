'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react';
type SharedStateContextType = {
  sharedStates: Record<string, any>;
  setSharedStates: React.Dispatch<React.SetStateAction<Record<string, any>>>;
};

const SharedStateContext = createContext<SharedStateContextType | undefined>(undefined);

type SharedStateProviderProps = {
  children: ReactNode;
};

export const SharedStateProvider: React.FC<SharedStateProviderProps> = ({ children }) => {
  const [sharedStates, setSharedStates] = useState<Record<string, any>>({});
  return (
    <SharedStateContext.Provider value={{ sharedStates, setSharedStates }}>
      {children}
    </SharedStateContext.Provider>
  );
};



export const useSharedState = <T extends unknown>(
  key: string,
  initializer?: T | (() => T),
  makePersistent: boolean = false
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const context = useContext(SharedStateContext);

  if (!context) {
    throw new Error("useSharedState must be used within a SharedStateProvider");
  }

  const { sharedStates, setSharedStates } = context;

  const getInitialState = () => {
    // if (makePersistent) {
    //   const persistedValue = localStorage.getItem(key);
    //   if (persistedValue) {
    //     return JSON.parse(persistedValue);
    //   }
    // }

    if (initializer !== undefined) {
      return typeof initializer === "function"
        ? (initializer as () => T)()
        : initializer;
    }

    return undefined;
  };

  const [state, setState] = useState<T | undefined>(getInitialState);

  const setSharedState = (value: T | ((prevState: T) => T)) => {
    const newValue = typeof value === "function"
      ? (value as (prevState: T) => T)(state)
      : value;

    if (makePersistent) {
      // localStorage.setItem(key, JSON.stringify(newValue));
    }

    setState(newValue);
    setSharedStates(prev => ({ ...prev, [key]: newValue }));
  };

  return [state, setSharedState];
};



