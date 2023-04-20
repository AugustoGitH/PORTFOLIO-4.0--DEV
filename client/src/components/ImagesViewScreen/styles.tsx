import styled from "styled-components";
import animationsPresence from "../../animations/presence";




export const ImagesViewScreen = styled.div`
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    top: 0;
    left: 0;
    background-color: #0000004f;
    
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    .card{
        background: var(--color-background-solid);
        box-shadow: 0px 0px 25px #0000004d;
        border-radius: 1.5rem;
        ${animationsPresence.scale};
        position: relative;
        overflow: hidden;
        padding: 5rem 2rem;
        width: 800px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width: 740px) {
            padding: 5rem .3rem;
        }
        .button-close{
            all: unset;
            width: 40px;
            height: 40px;
            background-color: var(--color-background-light);
            color: var(--color-yellow);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            right: 1rem;
            top: 1rem;
            font-size: 1.3rem;
            cursor: pointer;
            transition: .2s;
            &:hover{
                border-radius: .4rem;
            }
        }
        .image-cover{
            width: 100%;
            height: 260px;
            background: var(--color-background-light);
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            @media (max-width: 740px) {
                height: 210px;
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .images-list{
            width: 100%;
            display: flex;
            gap: 1rem;
            margin-top: 3%;
            justify-content: center;
            align-items: center;
            li{
                cursor: pointer;
                width: calc((100% / 4) - 1rem);
                height: 80px;
                overflow: hidden;
                background: var(--color-background-light);
                border-radius: .5rem;
                transition: .2s;
                @media (max-width: 740px) {
                    height: 60px;
                }
                &:hover{
                    transform: scale(1.1);
                }
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
`