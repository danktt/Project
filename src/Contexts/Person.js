import { createContext, useEffect, useState } from "react";
import { api } from "../Service/api";
import '../Service/mirage'


export const PersonContext = createContext([]);

export default function PersonProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("users")
      .then(response => setUsers(response.data))
     
  }, [])

  return (
    <PersonContext.Provider value={{users}}>
      {children}
    </PersonContext.Provider>
  )
}
