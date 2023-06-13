import { useEffect } from "react"
import { useLocalStorage } from "../../hooks/localStorage"
import { ButtonGoogleLogin } from "../../components/ButtonGoogleLogin"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const credentials = useLocalStorage('credentials')
    const navigate = useNavigate()
    useEffect(() => {
        credentials && navigate('/home')
    },[credentials])
    return <div style={{ textAlign: 'center'}}>
        <h1>Login Page</h1>
        <ButtonGoogleLogin/>
   </div>
}