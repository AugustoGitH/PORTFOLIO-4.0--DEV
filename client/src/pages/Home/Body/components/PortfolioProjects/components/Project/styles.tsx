import styled from "styled-components";


export const Project = styled.li`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ImagesCover = styled.div`
    width: 300px;
    height: 100%;
    .cover{
        width: 100%;
        height: 75%;
        border-radius: 0.5rem;
        background-color: #e8ecec21;
        border-radius: 1rem;
        overflow: hidden;
        transition: 0.2s;
        cursor: pointer;
        img{
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
    ul{
        width: 100%;
        height: 25%;
        padding-top: .7rem;
        display: flex;
        gap: .5rem;
        li{
           width: 100%;
            height: 100%;
            background-color: #e8ecec21;
            overflow: hidden;
            border-radius: .4rem;
            transition: .2s;
            cursor: pointer;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #29292730;
                backdrop-filter: blur(.4px);
                transition: .2s;
            }
            &:hover{
                transform: scale(1.1);
                &::after{
                    opacity: 0;
                }
            }
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

`

export const Description = styled.div`
    width: calc(100% - 300px);
    padding-left: 1.5rem;

`