import styled from "styled-components"

const FormStyle = styled.form`
    
    width: ${props => props.typeForm === "new-register-form"? "100%": "85%"};
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 25px 0 36px 0;

    input {
        width: 100%;
        height: 58px;
        margin-bottom: 13px;
        border-radius: 5px;
        border: 0;
        font-weight: 400;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        padding: 0 0 0 15px;
        box-sizing: border-box;
        appearance: textfield;
    }

    input:placeholder {
        color: black;
    } 
    
    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    } 

    button {
        width: 100%;
        font-weight: 700;
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        color: white;
        height: 46px;
        background-color: #A328D6;
        border: 0;
        border-radius: 5px;
        box-sizing: border-box;
    }
`
export default FormStyle