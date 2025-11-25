import { Routes, Route} from "react-router-dom";
import {ProtectedRoute} from "../hooks/ProtectedRoute";
import {Home} from "../pages/Home"
import { Login } from "../pages/PageBase";
import { UserAuth } from "../context/AuthContext";
export function MyRoutes(){
    const{user} = UserAuth()
    return(
    
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route element={<ProtectedRoute user={user}/>}>

            </Route>
            <Route path="/login" element={<Login/>}/>

        </Routes>
    
    )
}