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
        }
    }
`

export default HeaderStyled