import styled from "styled-components";
import {LinksArray, SecondarylinksArray, ToggleTema} from "../../index";
import {v} from "../../styles/variables";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export function MenuHambur(){
    const [click,setClick]= useState(false);

    return (<Container>
        <NavBar>
            <section>
                <HamburgerMenu onClick={()=>setClick(!click)}>
                   
                    <label className={click?"toggle toggle2 active":"toggle toggle2"}  >
                    <div id="bar4" className="bars"></div>
                    <div id="bar5" className="bars"></div>
                    <div id="bar6" className="bars"></div>
                    </label>
                </HamburgerMenu>
            </section>
             <Menu $click={click.toString()}>
            {LinksArray.map(({ icon, label, to }) => (
            <div onClick={()=>setClick(!click)}
                className="LinkContainer active"
                key={label}
            >
                <NavLink
                to={to}
                className="Links"
                >
                <div className="Linkicon">{icon}</div>
                <span>{label} </span> 
                </NavLink>
            </div>
            ))}
            <Divider />
            {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
                className="LinkContainer"
                key={label}
                onClick={()=>setClick(!click)}
            >
                <NavLink
                to={to}
                className="Links"
                >
                <div className="Linkicon">{icon}</div>
                <span>{label} </span>
                
                </NavLink>
            </div>
            ))}
            <ToggleTema/>
            <Divider />
        </Menu>
        </NavBar>
    </Container>)
}

const Container = styled.div`
    background-color: ${(props)=>props.theme.body};
`

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
`

const HamburgerMenu = styled.span`
    position:fixed;
    top: 2rem;
    z-index:100;

    #checkbox2 {
    display: none;
    }

    .toggle2 {
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition-duration: .5s;
        &.active{
            transition-duration: .5s;
            transform: rotate(180deg);

            .bars {
                position: absolute;
                transition-duration: .5s;
                }
            #bar5 {
                transform: scaleX(0);
                transition-duration: .5s;
            }
            #bar4 {
                width: 100%;
                transform: rotate(45deg);
                transition-duration: .5s;
            }
            #bar6 {
                width: 100%;
                transform: rotate(-45deg);
                transition-duration: .5s;
            }
                
        }
    }

    .bars {
    width: 100%;
    height: 6px;
    background-color: ${({theme})=>theme.text};
    border-radius: 6px;
    }

    #bar5 {
    transition-duration: .8s;
    }

    #bar4,#bar6 {
    width: 80%;
    }

`

  const Menu = styled.div`
        display: flex;
        align-items: center;
        list-style:none,
        z-index:10;
        flex-direction:column;
        position:fixed;
        justify-content:center;
        top:0;
        left:0;
        right:0;
        bottom:0;
        width: 100vw;
        background-color:${(props)=>`rbga($props.theme.bodyRgba),0.85`};
        backdrop-filter: blur(3px);
        transform:${(props)=>
            props.$click == "true" ? "translateY(0)" : "translateY(1000%)"};
            transition: all 0.3s ease;
            .LinkContainer{
                &:hover{
                    background: ${(props)=> props.theme.bgAlpha};
                }
                .Links{
                    width: 100vw;
                    display:flex;
                    align-items: center;
                    text-decoration:none;
                    color: ${(props)=> props.theme.text};
                    height:80px;
                    .Linkicon{
                        padding: ${v.smSpacing} ${v.mdSpacing};
                        display:flex;
                        svg{
                        font-size:25px;
                        }                    
                    }
                }
            }
    `;
    const Divider = styled.div`
        height: 1px;
        width: 100%;
        background: ${(props) => props.theme.bg4};
        margin: ${() => v.lgSpacing} 0;
    `;