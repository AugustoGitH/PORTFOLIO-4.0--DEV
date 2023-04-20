import styled from "styled-components";
import animationsPresence from "../../../../../../animations/presence";



export const Project = styled.li`
  width: 100%;
  height: 500px;
  position: relative;
  .sub-project, .sup-project{
    width: 100%;
  }
  .sub-project{
    height: 45%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    .form-inputs-edit{
      width: calc(100% - 30% - 2rem - 80px);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
  .sup-project{
    height: 60%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .buttons-control-edit{
    position: absolute;
    bottom: 1rem;
    right: 0;
    display: flex;
    gap: 1rem;
    button{
      all: unset;
      background: #292727;
      ${animationsPresence.scale};
      color: #ffffffcc;
      padding: .6rem 1rem;
      font-size: 1.1rem;
      border-radius: .4rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.2px solid #ffffff38;
      transition: .2s;
      &:hover{
        color: var(--color-yellow);
        border: 1.2px solid #cebe0838;
      }
      i{
        font-size: 1.4rem;
        margin-left: 1rem;
      }
    }
  }

`
export const PopupLoading = styled.div`
  position: absolute;
  width: 110%;
  height: 110%;
  left: -1rem;
  top: -1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: 10;
`


export const InputEdit = styled.div`
  width: 100%;
  display: flex;
  gap: .4rem;
  border-radius: .3rem;
  overflow: hidden;
  input{
    all: unset;
    background-color: #e3e3e3;
    padding: .5rem 1rem;
    width: 100%;
    color: var(--color-dark);
    transition: .2s;
    &:focus{
      background-color: #fff;
    }
  }
  button{
    all: unset;
    padding: 0 1rem;
    background: #353535;
    border: 1.3px solid #353535;
    cursor: pointer;
    transition: .2s;
    font-size: .9rem;
    color: #ffffffb4;
    &:hover{
      color: #fff;
    }
  }

`




export const DisplayPositions = styled.div`
  width: 40px;
  height: 100%;
  background-color: var(--color-background-light);
  border-radius: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    li{
      font-size: 1.2rem;
      color: #ffffff7d;
      cursor: pointer;
      transition: .2s;
      &:hover{
        color: var(--color-yellow);
        transform: scale(1.3);
      }

    }
    .marked{
      color: var(--color-yellow);
      transform: scale(1.3);
    }
  }
`



export const ControlButtons = styled.div`
  width: 40px;
  height: 100%;
  background-color: var(--color-background-light);
  border-radius: .4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0;
  ul{
    display: flex;
    flex-direction: column;
    gap: .2rem;
    li{
      i{
        font-size: 1.3rem;
        color: #ffffff7d;
        transition: .2s;
      }
      cursor: pointer;
      position: relative;
      &:hover{
       i{
        color: var(--color-yellow);
        transform: scale(1.2);
       }
      }
    }
    .button-att-repo, .button-trash{
      &::after{
        font-size: .7rem;
        position: absolute;
        line-height: .6rem;
        background-color: var(--color-dark);
        padding: .3rem .5rem;
        text-align: center;
        border-radius: .3rem;
        pointer-events: none;
        right: 1.5rem;
        top: 0;
        transform: translateX(-15px);
        opacity: 0;
        transition: .2s;
      }
      &:hover{
        &::after{
          transform: translateX(0px);
          opacity: 1;
        }
      }
    }
    .button-att-repo{
      &::after{
        content: "Atualizar repositório";
      }
    }
    .button-trash{
      &::after{
        content: "Deletar projeto";
      }
    }
  }

`














export const ImagesProject = styled.div`
  width: 30%;
  height: 100%;
  .cover{
    width: 100%;
    height: 70%;
    overflow: hidden;
    border-radius: .4rem;
    background-color: var(--color-background-light);
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .images-sec{
    width: 100%;
    display: flex;
    height: 30%;
    gap: .5rem;
    padding-top: 1rem;
    li{
      width: 100%;
      border-radius: .3rem;
      height: 100%;
      background-color: var(--color-background-light);
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        color: #ffffff98;
      }
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }



`
