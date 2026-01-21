import styled from "styled-components";
import { AccionTabla } from "../atomos/AccionesTabla";
import { v } from "../../styles/variables";
export function ContentAccionesTabla({funcionEditar, funcionEliminar}){
    return (<Container>

        <AccionTabla 
        funcion={funcionEditar}
        fontSize="18px"
        color="#d69393"
        icono={<v.iconeditarTabla />}
        />

        <AccionTabla
        funcion={funcionEliminar}
        fontSize="18px"
        color="#d20808"
        icono={<v.iconeliminarTabla />} 
        />


    </Container>)
}

const Container = styled.div `
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 48em){
        justify-content: end;
    }
`