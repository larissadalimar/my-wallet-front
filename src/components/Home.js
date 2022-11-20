import { useContext } from "react"
import styled from "styled-components"
import AuthContext from "../contexts/AuthContext"
import { RiLogoutBoxRLine } from "react-icons/ri"

export default function Home(){

    const { user } = useContext(AuthContext)
    return(
        <HomeStyle>
            <Navbar>
                <h2>Olá, {user.name}</h2>
                <RiLogoutBoxRLine/>
            </Navbar>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`

    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #8C11BE;
    padding: 10% 6% 5% 6%;
    box-sizing: border-box;

    font-family: 'Raleway', sans-serif;
`

const Navbar = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
        color: white;
        width:28px;
        height:29px;
    }

    h2{
        color: white;
        font-weight: 700;
        font-size: 26px;
    }
`