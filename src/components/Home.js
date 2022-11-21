import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import AuthContext from "../contexts/AuthContext"
import { RiLogoutBoxRLine, RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri"
import axios from "axios"
import Registro from "./Registro"
import { Link, useNavigate } from "react-router-dom"
import { HomeStyle, Navbar } from "../styles/DefaultStyles"

export default function Home(){
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [registers, setRegisters] = useState([])
    const [saldo, setSaldo] = useState(0.0)

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/register", {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        })

        promise.then((res) => {
            setRegisters(res.data.registers)
            //console.log(res.data.saldo)
            setSaldo(res.data.saldo)
        })

        promise.catch((error) => {
            alert(error)
            if(error.response.status === 401) navigate("/")
        })

    }, [registers, saldo])

    function logout(){
        const promise = axios.delete("http://localhost:5000/sign-out", {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        })

        promise.then(() => navigate("/"))
        promise.catch((err) => { if(err.response?.status !== 401) alert(err.message); else navigate("/")})
    }
    
    return(
        <HomeStyle>
            <Navbar>
                <h2>Olá, {user.name}</h2>
                <button onClick={logout}><RiLogoutBoxRLine/></button>
            </Navbar>
            <Registros registers={registers.length > 0}>
                {registers.length > 0? 
                <>
                    <div>{registers.map((register, index) => <Registro key={index} register={register}/>)}</div>
                    <div>
                        <p className="saldo"><span className="saldo-titulo">SALDO</span><span>{Number(saldo).toFixed(2)}</span></p>
                    </div>
                </>
                     
                    :
                   <div className="no-registers"> <h2>Não há registros de entrada ou saída</h2> </div>
                }
            </Registros>
            <ButtonsDiv>
                <Link to={"/new-register/entrada"}>
                    <div>
                        <button> 
                            <RiAddCircleLine/><p><span>Nova</span> <span>entrada</span></p>
                        </button>
                    </div>
                </Link>
                <Link to={"/new-register/saida"}>
                    <div>
                        <button> 
                            <RiIndeterminateCircleLine/><p><span>Nova</span> <span>saída</span></p>
                        </button>
                    </div>
                </Link>
            </ButtonsDiv>
        </HomeStyle>
    )
}

const ButtonsDiv = styled.div`
    width: 100%;
    heght: 110px;
    margin-top: 13px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        width: 48%;
        height: 110px;

        padding: 3%;

        box-sizing: border-box;
        background-color: #A328D6;
        border-radius: 5px;
        text-decoration: none;
    }

    div {
        width: 100%;
        height: 100%;
    }

    button {
        width: 100%;
        height: 100%;
        background-color: #A328D6;
        font-weight: 700;
        color: white;
        font-family: 'Raleway', sans-serif;
        border: 0;
        border-radius: 5px;
        font-size: 17px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        svg{
            width: 22px;
            height: 22px;
        }

        p {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
`

const Registros = styled.div`
    width: 100%;
    min-height: 430px;
    height: 50%;
    background-color: white;
    border-radius: 5px;

    display:flex;
    flex-direction: column;
    justify-content: ${props => props.registers? "space-between": "center"};
    align-items: center;
    padding: 7% 5%;
    box-sizing: border-box;

    .no-registers{
        color: #868686;
        font-size: 20px;
        text-align:center:
    }

    > div{
        width: 100%;

        .saldo-titulo{
            font-weight: 700;
        }

        .saldo{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
        }
    }
`