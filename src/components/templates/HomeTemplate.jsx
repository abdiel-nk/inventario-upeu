import styled from "styled-components";
import { Btnsave } from "../moleculas/Btnsave";
import {useAuthStore} from "../../store/AuthStore"
export function HomeTemplate(){
    const {singOut} = useAuthStore();
    return (<Container>
        <h1>Home Template</h1>
        <Btnsave titulo="Cerrar Sesión" bgcolor="#ffff" funcion={singOut}></Btnsave>
    </Container>)
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${({theme})=>theme.bgtotal};
    color: ${({theme})=>theme.text};
    width: 100%;


`