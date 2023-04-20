import styled from "styled-components";

const CardLoginStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-background-solid);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .card-section {
    background-color: var(--color-light);
    padding: 2rem;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 1px 1px 20px #00000056;
    .icon-person {
      color: $color-dark;
      font-size: 3rem;
    }
    button {
      all: unset;
      margin-top: 2rem;
      color: var(--color-light);
      background-color: var(--color-dark);
      border: 1.6px solid var(--color-dark);
      padding: 0.4rem 1.7rem;
      border-radius: 0.8rem;
      transition: .2s;
      cursor: pointer;
      &:hover{
        background: transparent;
        color: var(--color-dark);
      }
    }
    .input-card {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      color: var(--color-dark);
      margin-top: 2rem;
      label {
        width: 100%;
        font-weight: bold;
        text-transform: uppercase;
      }
      input {
        width: 100%;
        padding: 0.5rem 1.3rem;
        font-size: 1.1rem;
        border: 1.5px solid var(--color-dark);
        box-shadow: 3px 3px var(--color-dark);
        border-radius: 0.8rem;
        transition: .2s;
        &:focus {
          outline: none;
          box-shadow: none;
          transform: translate(3px, 3px);
        }
      }
    }
  }
`;

export { CardLoginStyled };
