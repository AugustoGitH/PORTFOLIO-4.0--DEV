import styled from "styled-components"

const HeaderStyled = styled.header`
    background-color: var(--color-background-solid);
    padding: .8rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppis, Arial, Helvetica, sans-serif;
    position: sticky;
    top: 0;
    z-index: 20;
    .content{
        width: var(--width-limit-content);
        display: flex;
        justify-content: space-between;
        align-items: center;
        a{
            all: unset;
            color: var(--color-light);
            h1{
                font-size: 1rem;
                letter-spacing: .1rem;
                cursor: pointer;
                position: relative;
                text-transform: uppercase;
                &::before{
                    content: "";
                    position: absolute;
                    height: 100%;
                    left: -1.3rem;
                    width: 3px;
                    background-color: #e9b95b;
                    border-radius: .3rem;
                }
        }
        }
        nav{
            display: flex;
            align-items: center;
            justify-content: center;
            a, button{
                all: unset;
                display: inline-block;
                position: relative;
                background-color: var(--color-background-light);
                font-size: 1.3rem;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: .6rem;
                cursor: pointer;
                transition: .3s;
                i{ color: var(--color-yellow); }
                &:hover{
                    border-radius: 10%;
                }
            }
           
            .button-github, .button-linkedin, .button-curriculum{
                &:hover{
                    &::after{
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                &::after{
                    position: absolute;
                    width: 70px;
                    font-size: .7rem;
                    background-color: var(--color-dark);
                    color: #fff;
                    padding: .3rem;
                    text-align: center;
                    z-index: 15;
                    border-radius: .3rem;
                    bottom: -1.8rem;
                    right: 0rem;
                    transform: translateX(20px);
                    opacity: 0;
                    transition: .2s;
                }
            }
            .button-github::after{
                content: "Meu GitHub";
            }
            .button-linkedin::after{
                content: "Meu Linkedin";
            }
            .button-curriculum::after{
                content: "Baixar Currículo";
                width: 85px;
            }
            
        }
    }
`

export default HeaderStyled