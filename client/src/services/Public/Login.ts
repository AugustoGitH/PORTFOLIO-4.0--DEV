import { routesPublic } from "../routes/Public"
import { TLogin } from "./types"
import axios, { AxiosError } from "axios"



const login = async (user: TLogin)=>{
    try{
        const { data } = await axios.post(routesPublic.login, user)
        return {
            message: data?.message || "Login bem sucedido!",
            ok: true
        }
    }catch(error: unknown){
        if(error instanceof AxiosError) return {
            message: error.response?.data.message || "Erro interno no servidor ao fazer login.",
            ok: false
        }
        else return {
            message:  "Erro interno no servidor ao fazer login.",
            ok: false
        }
    }

}

export default login