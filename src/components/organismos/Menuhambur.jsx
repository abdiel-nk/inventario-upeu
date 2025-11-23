import styled from "styled-components";
import {LinksArray, SecondarylinksArray, ToggleTema} from "../../index";
import {v} from "../../styles/variables";

import { NavLink } from "react-router-dom";

export function MenuHambur(){
    return (<Container>
        <NavBar>
            <section>
                <HamburgerMenu>
                    <input id="checkbox2" type="checkbox"/>
                    <label class="toggle toggle2" for="checkbox2">
                    <div id="bar4" class="bars"></div>
                    <div id="bar5" class="bars"></div>
                    <div id="bar6" class="bars"></div>
                    </label>
                </HamburgerMenu>
            </section>

             <Main >
        <span className="Sidebarbutton" onClick={() => setState(!state)}>
            {<v.iconoflechaderecha />}
        </span>
        
            <div className="Logocontent">
            <div className="imgcontent">
                <img src={v.logo} />
            </div>
            <h2>Inventario-UPG Salud</h2>
            </div>
            {LinksArray.map(({ icon, label, to }) => (
            <div
                className="LinkContainer active"
                key={label}
            >
                <NavLink
                to={to}
                className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
                >
                <div className="Linkicon">{icon}</div>
                
                
                </NavLink>
            </div>
            ))}
            <Divider />
            {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
                className="LinkContainer"
                key={label}
            >
                <NavLink
                to={to}
                className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
                >
                <div className="Linkicon">{icon}</div>
                
                
                </NavLink>
            </div>
            ))}
            <ToggleTema/>
            <Divider />
            
        
        </Main>

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
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    transition-duration: .5s;
    }

    .bars {
    width: 100%;
    height: 6px;
    background-color: rgba(248, 192, 7, 1);
    border-radius: 6px;
    }

    #bar5 {
    transition-duration: .8s;
    }

    #bar4,#bar6 {
    width: 80%;
    }

    #checkbox2:checked + .toggle2 .bars {
    position: absolute;
    transition-duration: .5s;
    }

    #checkbox2:checked + .toggle2 #bar5 {
    transform: scaleX(0);
    transition-duration: .5s;
    }

    #checkbox2:checked + .toggle2 #bar4 {
    width: 100%;
    transform: rotate(45deg);
    transition-duration: .5s;
    }

    #checkbox2:checked + .toggle2 #bar6 {
    width: 100%;
    transform: rotate(-45deg);
    transition-duration: .5s;
    }

    #checkbox2:checked + .toggle2 {
    transition-duration: .5s;
    transform: rotate(180deg);
    }

`

  const Main = styled.div`
    .Sidebarbutton {
        position: fixed;
        top: 70px;
        left: 42px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${(props) => props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props) => props.theme.bg3},
        0 0 7px ${(props) => props.theme.bg};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        z-index: 2;
        transform: ${({ $isopen }) =>
        $isopen==="true" ? `translateX(162px) rotate(3.142rad)` : `initial`};
        color: ${(props) => props.theme.text};
    }
    `;
    const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props) => props.theme.bg4};
    margin: ${() => v.lgSpacing} 0;
`;