import { Routes, Route} from "react-router-dom";
import {ProtectedRoute} from "../hooks/ProtectedRoute";
import {Home} from "../pages/Home"
import {Login} from "../pages/Login";
import { UserAuth } from "../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { useUsuariosStore, } from "../store/UsuariosStore";
import { SpinnerLoader } from "../components/moleculas/SpinnerLoader";
import { ErrorMolecula} from "../components/moleculas/ErrorMolecula";
import { useEmpresaStore } from "../store/EmpresaStore";


export function MyRoutes(){
    
    const{user} = UserAuth();
    const{mostrarUsuarios, idusuario} = useUsuariosStore();
    const {mostrarEmpresa} = useEmpresaStore();
    const {data:datausuarios, isLoading, error} =useQuery({
        queryKey:["mostrar usuarios"],
        queryFn: mostrarUsuarios,

    });

    const {data: dataempresa}=useQuery({queryKey:["mostrar empresa"],queryFn:()=>mostrarEmpresa(
        {idusuario:idusuario}), enabled:!!datausuarios})

    if(isLoading){
        return <SpinnerLoader/>
    }
    if(error){
        return <ErrorMolecula mensaje={error.message}/>
    }
    return(
    
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    
    );
}