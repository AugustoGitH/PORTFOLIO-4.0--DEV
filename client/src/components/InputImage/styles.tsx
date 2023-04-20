import styled from "styled-components";
import animationsPresence from "../../animations/presence";

export const InputImageContainer = styled.div`
  width: 100%;
  .button-show-selected-images{
    all: unset;
    background-color: var(--color-yellow);
    color: var(--color-dark);
    padding: .6rem 1rem;
    border-radius: .5rem;
    cursor: pointer;
    font-size: .9rem;
    border: 1.4px solid var(--color-yellow);
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    i{
      margin-right: 1rem;
      font-size: 1.3rem;
    }
    &:hover{
      background-color: transparent;
      color: var(--color-yellow);
    }
  }
  .popup-selected-images{
    width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: #1f181974;
    padding: 3rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    .card{
      background-color: var( --color-background-solid);
      padding: 5rem 3rem;
      ${animationsPresence.scale};
      border: 1.3px solid #ffffff1b;
      box-shadow: 0 0 20px #00000029;
      border-radius: 1rem;
      position: relative;
      .button-close-popup{
        all: unset;
        color: var(--color-yellow);
        background-color: #222221;
        position: absolute;
        font-size: 1.2rem;
        top: 1rem;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        right: 1rem;
        cursor: pointer;
      }
      .list-input-images{
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow-y: auto;
        max-height: 300px;
      }
    }
  }
  
`

export const InputImage = styled.div`
  label{
          background-color: var(--color-background-light);
          display: flex;
          width: 700px;
          height: 300px;
          border-radius: .6rem;
         
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          cursor: default;
          overflow: hidden;
          &:hover .image-icon{
            transform: scale(1.3);
          }
          &:hover span{
            color: #fff;
          }

          img{
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: contain;
            ${animationsPresence.scale};
          }
    
          .buttons-edit{
            position: absolute;
            right: 1rem;
            top: 1rem;
            display: flex;
            flex-direction: column;
            gap: .5rem;
            
            .delete-image, .favorite-image{
              all: unset;
              font-size: .9rem;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #373736;
              color: #000000a2;
              cursor: pointer;
              ${animationsPresence.scale};
              transition: .2s;
              &:hover{
                color: var(--color-yellow);
                i{
                  transform: scale(1.1);
                }
              }
            }
          } 
          .image-icon{
            color: #ffffffa3;
            transition: .2s;
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          span{
            cursor: pointer;
            transition: .2s;
            background-color: #ffffff1e;
            padding: .4rem 1rem;
            border-radius: .3rem;
            color: #ffffffa4;
            font-size: .8rem;

          }
        }
        input{
          display: none;
        }

`