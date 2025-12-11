import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { MostrarEmpresa } from "../supabase/crudEmpresa";


export const useEmpresaStore = create((set, get)=>({

    dataempresa:[],
    
    mostrarEmpresa: async(p)=>{
        const response = await MostrarEmpresa(p);
        set({idusuario:response});
        return response;

    }
}));