import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const credentialCheckAccess = async (req: Request, res: Response, next: NextFunction)=>{
    const token = req.cookies[process.env.TOKEN_AUTHENTICATION_NAME]

    if(!token) return res.status(404).send({
        message: "Token de authenticação não encontrado!"
    })

    try{
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET)
        return next()
    }catch(error){
        res.status(401).send({
            message: "Você não possui a authenticação necessária."
        })
    }
}


export default credentialCheckAccess