import FormStyle from "../styles/FormStyle";
import AuthStyle from "../styles/AuthStyle";
import { useState } from "react";
import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cadastro(){
    const navigate = useNavigate()
    const [cadastro, setCadastro] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    function handleForm(e){
        setCadastro({
            ...cadastro,
            [e.target.name]: e.target.value
        })
    }

    function signUp(e){

        e.preventDefault()

        const promise = axios.post("http://localhost:5000/sign-up", cadastro)

        promise.then((res) =>
            navigate('/')
        )

        promise.catch((err) => alert(err.response?.data))

    }

    return(
        <AuthStyle className="cadastro-page">
            <div>
                <img src={logo} alt="logo"/>
                <FormStyle onSubmit={signUp}>
                    <input name="name" type='text' placeholder="Nome" required value={cadastro.name} onChange={handleForm}/>
                    <input name="email" type="email" placeholder="E-mail" required value={cadastro.email} onChange={handleForm}/>
                    <input name="password" type="password" placeholder="Senha" required value={cadastro.password} onChange={handleForm}/>
                    <input name="confirm_password" type='password' placeholder="Confirme a senha" required value={cadastro.confirm_password} onChange={handleForm}/>
                    <button type="submit">Cadastrar</button>
                </FormStyle>
                <Link to="/">
                    <div>
                        <h2>Já tem uma conta? Entre agora!</h2>
                    </div>
                </Link>
            </div>
        </AuthStyle>
    )
}