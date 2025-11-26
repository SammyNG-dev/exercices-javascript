import { createContext, useContext, useState } from "react";

const MessageContext = createContext(null);

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Bonjour depuis le context");
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
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
