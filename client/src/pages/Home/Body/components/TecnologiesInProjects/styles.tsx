import styled from "styled-components";


export const TecnologiesInProjects = styled.div`
  background-color: var(--color-background-light);
  margin-top: 7rem;
  border-radius: 1.5rem;
  padding: 3rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 20px #00000025;
  position: relative;
  @media (max-width: 434px) {
    padding: 4rem 1rem 1rem 1rem;
  }
  h1 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    text-align: center;
    line-height: 2rem;
    position: absolute;
    top: -1rem;
    padding: 0 1rem;
    font-size: 2rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
      margin: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      padding: 0.4rem 1.3rem;
      cursor: default;
      border: 1.4px solid rgba(255, 255, 255, 0.596);
      transition: 0.3s;
      position: relative;
      @media (max-width: 893px) and (min-width: 956px) {
        width: calc(50% - 2rem);
      }
      @media (max-width: 523px) {
        width: calc(50% - 2rem);
      }
      @media (max-width: 420px) {
        width: 100%;
      }
      &::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 10px;
          background-color: var(--color-background-light);
          right: -3px;
          top: -2px;
          transform: translateX(-50%);
          transition: 0.3s;
        }
        &::before {
          content: "";
          position: absolute;
          width: 20px;
          height: 10px;
          background-color: var(--color-background-light);
          left: -3px;
          bottom: -2px;
          transform: translateX(-50%);
          transition: 0.3s;
        }
        &:hover::after,
        &:hover::before {
          width: 0%;
        }
        &:hover {
          border: 1.4px solid var(--color-light);
        }
        &:hover h2 {
          color: var(--color-light);
        }
      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media(max-width: 523px){
          width: 100px;
        }
        h2 {
          font-size: 1rem;
          transition: 0.3s;
          color: rgba(255, 255, 255, 0.753);
        }
        i {
          font-size: 1.4rem;
          margin-right: 0.5rem;
          color: var(--color-yellow);
          transition: .2s;
        }
      }
    }
  }


`