import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

const AuthProvider = ({children})=>{
  
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  async function loginUser(data) {
    // console.log(data);
    const response = await api.post('/sessions', data)
    const {user: userResponse} = response.data;
    setUser(userResponse);
    // console.log(response);
    navigate('/dashboard', { replace: true });
  }

  async function registerUser(data) {
    console.log(data);

      const response = await api.post('/users', data)

      console.log(response);
    // navigate('/dashboard', { replace: true });
  }

  return(
  <AuthContext.Provider value={{user, loginUser, registerUser}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider;