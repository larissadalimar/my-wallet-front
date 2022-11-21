import { useContext, useState } from "react"
import FormStyle from "../styles/FormStyle"
import AuthStyle from "../styles/AuthStyle"
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from "../contexts/AuthContext"

export default function Login(){

    const { setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })


    function handleForm(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    function signIn(e){

        e.preventDefault()

        const promise = axios.post("http://localhost:5000/sign-in", login)

        promise.then((res) => {
            setUser(res.data)
            navigate('/home')
        })

        promise.catch((err) => alert(err.message))
    }

    return(
        <AuthStyle className="login-page">
            <div>
                <img src={logo} alt="logo"/>
                <FormStyle onSubmit={signIn}>
                    <input name="email" type="email" placeholder="E-mail" required value={login.email} onChange={handleForm}/>
                    <input name="password" type="password" placeholder="Senha" required value={login.password} onChange={handleForm}/>
                    <button type="submit">Entrar</button>
                </FormStyle>
                <Link to="/cadastro">
                    <div>
                        <h2>Primeira vez? Cadastre-se!</h2>
                    </div>
                </Link>
            </div>
        </AuthStyle>
    )
}



