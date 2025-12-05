import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
export const useAuthStore=create((set, get)=>({
    signInWithEmail: async (p)=>{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.pass,
            })
            if(error){
                return null;
            }
            return data.user;
            
    },
    singOut: async()=>{
        const {error} = await supabase.auth.singOut()
        if(error)
            throw new Error("Error al cerrar la sesión" + error)
    }
}))