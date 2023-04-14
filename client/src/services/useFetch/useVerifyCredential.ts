import axios from "axios"
import React, { useState, useEffect } from "react"
import { routesPublic } from "../routes/Public"


const useVerifyCredential = (reverse: boolean | undefined)=>{
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(()=>{
        axios.get(routesPublic.verifyCredential).then(response=>{
            setIsAuthenticated( reverse ? (!response.data?.isAuthenticated || false) : response.data?.isAuthenticated  )
        })
    }, [])

    return { isAuthenticated }
}

export default useVerifyCredential