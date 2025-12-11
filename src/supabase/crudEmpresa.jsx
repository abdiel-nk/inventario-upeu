import { supabase } from "./supabase.config";
import {ObtenerIdAuthSupabase} from "../supabase/globalSupabase";



export const MostrarEmpresa = async(p)=>{
    const {error,data} = await supabase
    .from("asignarempresa")
    .select(`empresa(id, nombre, simbolomone)`)
    .eq("id_usuario",p.idusuario)
    .maybeSingle();

    if(data){
        return data;
    }
};