import styled from "styled-components";
import animationsPresence from "../../../../animations/presence";




export const SearchRepos = styled.div`

  width: 100%;
  padding: 5rem 0;
  h4{
    color: var(--color-yellow);
    margin-bottom: -.2rem;
  }

`

export const InputSearch = styled.div`
  margin-top: 2rem;
  width: 400px;
  line-height: .5rem;
  @media (max-width: 500px) {
    width: 100%;
  }
  label{
    color: #ffffffd3;
    font-size: 0.9em;
    color: var(--color-yellow)
  }
  input{
    width: 100%;
    font-size: 1.1rem;
    padding: .6rem 1rem;
    outline: none;
    margin-top: .5rem;
    border-radius: .4rem;
    transition: .2s;
    font-family: var(--font-Alegreya);
    background: #dfdede;
    &:focus{
      background: #fff;
    }
  }

`

export const ListRepos = styled.ul`
  width: 800px;
  max-height: calc((140px * 2) + 1rem);
  overflow-y: auto;
  margin-top: 2rem;
  padding-right: .5rem;
  border-radius: .4rem;
  @media (max-width: 860px) {
    width: 100%;
  }
  
  .loading-repos{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
  }
  .not-repos-alert{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    ${animationsPresence.scale};
    p{
      background-color: var(--color-background-light);
      padding: .5rem 1rem;
      border-radius: .4rem;
      color: #ffffffd1;
    }
  }
  li{
    width: 100%;
    min-height: 140px;
    border-radius: .5rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;
    background-color: var(--color-background-light);
    ${animationsPresence.translateRight};
    @media (max-width: 420px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    p{
      color: #ffffffd3;
      span{
        color: var(--color-yellow);
      }
      .button-copy-id{
        all: unset;
        width: 25px;
        height: 25px;
        background-color: var(--color-yellow);
        border-radius: 50%;
        color: var(--color-dark);
        display: inline-flex;
        font-size: .9rem;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
        cursor: pointer;
        box-shadow: 2px 2px #918f06;
        transition: .2s;
        position: relative;
        &::after{
          content: "Copiar id";
          position: absolute;
          width: 60px;
          text-align: center;
          padding: .2rem 0;
          font-size: .6rem;
          background-color: var(--color-dark);
          color: #fff;
          border-radius: .2rem;
          bottom: -1rem;
          left: 1.4rem;
          transform: translateY(-20px);
          opacity: 0;
          transition: .2s;
          pointer-events: none;
        }
        &:hover{
          box-shadow: none;
          transform: translate(2px, 2px);
          &::after{
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
      .copy{
        &::after{
            width: 65px;
            content: "Id copiado!"
          }
      }
    }
  }

`