import styled from "styled-components";



export const PageNotFound = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--color-light);
  h1{
    line-height: 2rem;
    text-align: center;
  }
  a{
    all: unset;
    color: var(--color-dark);
    background-color: var(--color-yellow);
    padding: .6rem 1rem;
    border-radius: .4rem;
    border: 1.4px solid var(--color-yellow);
    transition: .2s;
    cursor: pointer;
    &:hover{
      background-color: transparent;
      color: var(--color-yellow);
    }

    margin-top: 2rem;
  }

`