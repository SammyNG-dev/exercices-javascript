import { createContext, useContext, useEffect, useState } from "react";

const MessageContext = createContext(null);

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Bonjour depuis le context");
  const [username, setUsername] = useState("Saminho");
  const [notifications, setNotifications] = useState([]);
  const addNotification = (newNotif) => {
    setNotifications([...notifications, { id: Date.now(), notif: newNotif }]);
  };

  useEffect(() => {
    const notifs = localStorage.getItem("notifications");
    if (notifs) {
      try {
        const parsed = JSON.parse(notifs);
        if (Array.isArray(parsed)) {
          setNotifications(parsed);
        }
      } catch (e) {
        console.error("Notifications invalides dans le storage", e);
      }
    }
    console.log(JSON.parse(notifs));
  }, []);

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
        username,
        setUsername,
        notifications,
        setNotifications,
        addNotification,
      }}
    >
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
