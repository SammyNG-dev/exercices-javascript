import { createContext, useContext, useState } from "react";

const HistoryContext = createContext(null);

export const HistoryContextProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const addEntry = (text) => {
    setHistory([...history, { id: Date.now(), text: text }]);
  };
  const removeEntry = (id) => {
    setHistory(history.filter((entry) => entry.id !== id));
  };
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <HistoryContext.Provider value={{ history, addEntry, removeEntry, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryContext = () => {
  const value = useContext(HistoryContext);
  if (!value) {
    throw new Error(
      "useHistoryContext must be used within an <HistoryContextProvider>",
    );
  }
  return value;
};
