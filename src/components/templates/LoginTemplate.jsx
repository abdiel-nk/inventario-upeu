import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import { useUsuariosStore } from "../../store/UsuariosStore";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function LoginTemplate(){
  const navigate = useNavigate();
  const {insertarUsuarioAdmin} = useUsuariosStore();
  const mutationInsertUser= useMutation({
    mutationKey:["insertar usuario admin"],mutationFn:async()=>{
      const p = {
        correo: "prueba@gmail.com",
        pass: "Abc123456#"
      }
     const dt= await insertarUsuarioAdmin(p)
     if(dt){
        navigate("/")
     } 
    }
  })

  return (<Container>
    <Btnsave titulo="Crear cuenta" bgcolor="#ffff" funcion={mutationInsertUser.mutateAsync}/>

  </Container>)  
}


const Container = styled.div`
height: 100vh;

`