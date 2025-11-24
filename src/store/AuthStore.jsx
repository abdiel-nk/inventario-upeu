import { create } from "zustand";
export const useAuthStore=create((set, get)=>({
    signInWithEmail: async (p)=>{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.pas,
         })
         if(error){
            return null;
         }
         
    },
    singOut: async()=>{
        const {error} = await suppabase.auth.singOut()
        if(error)
            throw new Error("Error al cerrar la sesión" + error)
    }
}))