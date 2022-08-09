import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({})

const AuthProvider = ({children})=>{
  
  const [user, setUser] = useState(null)

  async function loginUser(data) {
    console.log(data);

      const response = await api.post('/sessions', data)

      console.log(response);
    // navigate('/dashboard', { replace: true });
  }

  // async function registerUser(data) {
  //   console.log(data);

  //     const response = await api.post('/sessions', data)

  //     console.log(response);
  //   // navigate('/dashboard', { replace: true });
  // }

  return(
  <AuthContext.Provider value={{user, loginUser}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider;