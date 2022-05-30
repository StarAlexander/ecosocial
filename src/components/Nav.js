import React, { useState } from "react"
import styled, { css } from "styled-components"
import { Link, useNavigate } from "react-router-dom"
const Nav = () => {
    const navigate = useNavigate()
    const [line, setLine] = useState(null)
    return (
        <StyledNav className="nav" line={line}>
            <h1 onClick={() => { setLine(null); navigate("/") }}>Ecosocial</h1>
            <ul>

                <li className="about">
                    <Link onClick={() => setLine("about")} to="/about">О нас</Link>
                </li>
                <li className="safety">
                    <Link onClick={() => setLine("safety")} to="/safety">Безопасность</Link>
                </li>

            </ul>

        </StyledNav>
    )
}
const StyledNav = styled.nav`
transition:all 0.4s ease;
    height: 12vh;
    width:100%;
    display:flex;
    margin:auto;
    justify-content:space-around;
    align-items:center;
    padding: 1rem 0rem;
    background-color:darkblue;
    position:absolute;
    top:0;
    z-index:10;
    h1{
        color:white;
        cursor:pointer;
    }
    a{
        color:white;
        text-decoration:none;
    }
    ul{
        display:flex;
        list-style:none;
    }
    #logo{
        font-size:1.5rem;
        font-weight:lighter;
    }
    ${props => props.line === "about" && css`
    .about{
        border-bottom:3px solid red;
    }`}
    ${props => props.line === "safety" && css`
    .safety{
        border-bottom:3px solid red;
    }`}
    li{
        transition:all 0.4s ease;
        &:hover{
            background-color:rgb(0, 119, 156);
        }
        margin-left:5rem;
        height:5rem;
        padding-top:2rem;
        color:white;
        cursor:pointer;
    }
`

export default Nav