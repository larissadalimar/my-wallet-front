import styled from "styled-components"

export const HomeStyle = styled.div`

    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #8C11BE;
    padding: 10% 6% 5% 6%;
    box-sizing: border-box;

    font-family: 'Raleway', sans-serif;

    display: flex;
    flex-direction: column;
    align-items: "space-between";
    justify-content: ${props => props.page === "new-register"? "flex-start": "center"};
`
export const Navbar = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;

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

    button {
        border:0;
        background-color: #8C11BE;
    }
`