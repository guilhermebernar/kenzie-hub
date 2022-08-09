import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Dashboard = ()=> {
    const context = useContext(AuthContext)

    console.log(context)

    return(
        <span>Dashboard aqui</span>
    )
}

export default Dashboard