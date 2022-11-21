import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { HomeStyle, Navbar } from "../styles/DefaultStyles";
import FormStyle from "../styles/FormStyle";

export default function NewRegister(){
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const params = useParams()

    const [form, setForm] = useState({
        description: '',
        value: ''
    })

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function createRegister(e){

        e.preventDefault()

        const promise = axios.post("http://localhost:5000/register", {
            ...form,
            value: Number(form.value).toFixed(2),
            type: params.type
        },
        {
            headers: {
                authorization: `Bearer ${user.token}`
            }
        })

        promise.then((res) => navigate("/home"))
        promise.catch((err) => {
            alert(err.message);
            if(err.response?.status === 401) navigate("/")
        })
    }

    return(
        <HomeStyle page="new-register">
            <Navbar>
                <h2 className="new-register">Nova {params.type}</h2>
            </Navbar>
            <FormStyle typeForm="new-register-form" onSubmit={createRegister}>
                <input name="value" type="number" placeholder="Valor" required value={form.value} onChange={handleForm}/>
                <input name="description" type="text" placeholder="Descrição" required value={form.description} onChange={handleForm}/>
                <button type="submit">Salvar {params.type}</button>
            </FormStyle>
        </HomeStyle>
    )
}