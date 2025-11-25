import { Navigate } from "react-router-dom"

export const ProtectedRouter= ({user, redirectTo, children })=>{
    if(user==null) return <Navigate replace to={redirectTo}></Navigate>
    return children?children:<Outlet></Outlet>
}