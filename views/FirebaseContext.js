import React, { createContext, useState } from "react";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [data, setData] = useState({});

  const fetchData = async (user, day) => {
    try {
      // Lógica para obtener datos dinámicamente según usuario y día
      const result = await fetchFirebaseData(user, day); // Implementa esta función según tus necesidades
      setData({ ...data, [day]: result });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ data, fetchData }}>
      {children}
    </FirebaseContext.Provider>
  );
};
