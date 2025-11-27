import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const value = useContext(CounterContext);
  if (!value) {
    throw new Error(
      "useCounterContext must be used within a <CounterContextProvider />",
    );
  }

  return value;
};
