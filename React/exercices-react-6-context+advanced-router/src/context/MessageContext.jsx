import { createContext, useContext } from "react";

const MessageContext = createContext(null);

export const MessageContextProvider = ({ children }) => {
  return (
    <MessageContext.Provider value={{ message: "Bonjour depuis le context" }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessageContext = () => {
  const value = useContext(MessageContext);
  if (value === null) {
    throw new Error(
      "useMessageContext must be used within an MessageContextProvider",
    );
  }
  return value;
};
