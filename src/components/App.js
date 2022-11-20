
import { BrowserRouter, Route, Routes }from 'react-router-dom'
import  GlobalStyles from "../styles/GlobalStyles";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Home from './Home';
import AuthContext from '../contexts/AuthContext';
import { useState } from 'react';

export default function App(){

    const [user, setUser] = useState({
        nome: '',
        email: '',
        token: ''
    })

    return(
        <>
        <AuthContext.Provider value={{user, setUser}}>
        <GlobalStyles/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
        </>
    )
}