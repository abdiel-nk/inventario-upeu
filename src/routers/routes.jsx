import { Routes, Route} from "react-router-dom";
import {ProtectedRoute} from "../hooks/ProtectedRoute";
import {Home} from "../pages/Home"
import {Login} from "../pages/Login";
import { UserAuth } from "../context/AuthContext";

export function MyRoutes(){
    const{user} = UserAuth()

    return(
    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route element={<ProtectedRoute user={user} redirectTo="/home" />}>

                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    
    );
}