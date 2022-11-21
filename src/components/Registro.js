import styled from "styled-components"

export default function Registro({ register }){
    const {id, description, value, type, time, user} = register

    return(
        <RegistroStyle type={type} className="registro">
            <p>
                <span>
                    <span className="day">{time}  </span>
                    <span className="description"> {description}</span>
                </span>
                <span className="value">{value}</span>
            </p>
        </RegistroStyle>
    )
}

const RegistroStyle = styled.div`

    width: 100%;
    margin-bottom: 5%;

    p {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        font-weight: 400;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .day {
        color: #C6C6C6;
    }

    .description {
        color: black;
    }

    .value {
        color: ${props => props.type === "entrada"? "#03AC00" : "#C70000"}
    }
`