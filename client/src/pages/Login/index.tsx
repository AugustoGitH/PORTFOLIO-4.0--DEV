
import { useState } from "react"
import { CardLoginStyled } from "./styles"
import { TLogin } from "../../services/authLevel/Public/types"
import Servicelogin from "../../services/authLevel/Public/Login"

import { useNavigate, Navigate } from "react-router-dom"
import useFetchVerifyCredential from "../../queries/verifyCredential"

const Login = () => {
    const [user, setUser] = useState<TLogin>({
        name: "",
        password: ""
    })
    const { data: auth } = useFetchVerifyCredential()
    const navigation = useNavigate()

    const handleLogin = () => {
        if (!user.name || !user.password) return alert("Você esqueceu de preencher algum campo!")

        Servicelogin(user).then(response => {
            const { message, ok } = response
            alert(message)
            if (ok) {
                navigation("/painel")
            }
        })

    }

    return !auth ? (
        <CardLoginStyled>
            <div className="card-section">
                <div className="input-card">
                    <label>Nome do administrador</label>
                    <input type="text" value={user.name} onChange={ev => setUser(prevLogin => ({ ...prevLogin, name: ev.target.value }))} />
                </div>
                <div className="input-card">
                    <label>Senha</label>
                    <input type="password" value={user.password} onChange={ev => setUser(prevLogin => ({ ...prevLogin, password: ev.target.value }))} />
                </div>
                <button onClick={handleLogin}>Entrar</button>
            </div>
        </CardLoginStyled>
    ) : <Navigate to="/painel" />
}

export default Login