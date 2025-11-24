import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { InsertarUsuarios } from "../supabase/crudUsuarios";


export const UsuariosStores = create((set, get)=>({
    insertarUsuarioAdmin:async (p)=>{
        const{data, error} =  await supabase.auth.signUp({
            email: p.correo,
            password: p.pass,
            
        });
        console.log("Data del registro de usuario",data);
        if(error) return null;
        await InsertarUsuarios({idauth:data.id, fecharegistro:new Date(),tipouser:"admin",

        });
    },
}))