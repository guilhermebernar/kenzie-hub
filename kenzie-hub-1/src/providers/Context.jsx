import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export const Contexts = createContext({})

const ContextsProvider = ({children})=>{
  
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(()=>{
    async function loadUser() {
      if(token){
        try{
        
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get('/profile');
          setUser(data);

        } 
        catch(err){console.log(err)} 
      }
      setLoading(false)
    }

    loadUser()
  },[])

  async function loginUser(data) {
    console.log(data);
    
    const response = await api.post('/sessions', data)
    const {user: userResponse, token: localToken} = response.data; 

    console.log(userResponse);
    setUser(userResponse)
    api.defaults.headers.authorization = `Bearer ${localToken}`
    console.log(localToken)
    setToken(localToken);
    console.log(token)
    localStorage.setItem('@kenzie-hub-1:token', token)
    
    const userHash = response.data.user.id
    const confirm = location.state?.from?.pathname && token
    const toNavigate = confirm || `/dashboard/${userHash}`
    navigate(toNavigate, { replace: true });
  }

  async function registerUser(data) {
    console.log(data);

      const response = await api.post('/users', data)

      console.log(response);
      navigate('/login', { replace: true });
  }

  return(
  <Contexts.Provider value={{ user, loginUser, registerUser, loading }}>
    {children}
  </Contexts.Provider>
  )
}

export default ContextsProvider;