import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [id_pay, setIdPay] = useState(null);

  return (
    <UserContext.Provider value={{ userId, setUserId, id_pay, setIdPay }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

//A este codigo donde tengo la variable userId como contexto global, quiero que agregues tambien la variable id_pay