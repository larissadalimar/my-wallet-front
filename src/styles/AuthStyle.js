import styled from "styled-components"

const AuthStyle = styled.div`

width: 100%;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;

height: 100%;
min-height: 100vh;

background-color: #8C11BE;

> div {
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h2 {
    font-weight: 700;
    color: white;
    font-family: 'Raleway', sans-serif;
}

a:link { text-decoration: none; }
`
export default AuthStyle