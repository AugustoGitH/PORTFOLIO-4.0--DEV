import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useVerifyCredential from "../../services/useFetch/useVerifyCredential";


interface IPropsPrivateRouter{
    children: JSX.Element,
    redirect: string,
    reverse?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PrivateRouter = ({
    children, redirect, reverse }: IPropsPrivateRouter) => {
        const { isAuthenticated } = useVerifyCredential( reverse )
  
    return  isAuthenticated === null
    ? <></>
    : isAuthenticated
      ? children
      : <Navigate to={redirect} />;
  }


export default PrivateRouter