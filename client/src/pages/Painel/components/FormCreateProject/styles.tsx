import styled from "styled-components";
import animationsPresence from "../../../../animations/presence";

export const FormCreateProject = styled.div`
  padding: 5rem 0;
`;

export const Form = styled.div`
  margin-top: 2rem;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;
  position: relative;
  @media (max-width: 860px) {
    width: 100%;
  }
  .button-create-project {
    all: unset;
    margin-top: 3rem;
    background: #292727;
    ${animationsPresence.scale};
    color: #ffffffcc;
    padding: 0.6rem 1rem;
    font-size: 1.1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.2px solid #ffffff38;
    transition: 0.2s;
    &:hover {
      color: var(--color-yellow);
      border: 1.2px solid #cebe0838;
    }
    i {
      font-size: 1.4rem;
      margin-right: 1rem;
    }
  }
`;
export const PopUpLoading = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% + 2rem);
  top: -1rem;
  left: -1rem;
  backdrop-filter: blur(3px);
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputDefault = styled.div`
  position: relative;
  width: 500px;
  @media (max-width: 860px) {
    width: 100%;
  }
  input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    box-shadow: none;
    border: none;
    color: #23242a;
    font-size: 1.1rem;
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: 10;
    font-family: var(--font-Alegreya);
  }

  span {
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    font-size: 1em;
    color: #8f8f8f;
    letter-spacing: 00.05em;
    transition: 0.5s;
    pointer-events: none;
  }

  input:valid ~ span,
  input:focus ~ span {
    color: var(--color-yellow);
    transform: translateX(-12px) translateY(-36px);
    font-size: 0.9em;
  }

  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--color-yellow);
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
  }

  input:valid ~ i,
  input:focus ~ i {
    height: 44px;
    background-color: #fff;
  }
`;


interface IInputSelectIdRepoProps {
  disabled: boolean
}

export const InputSelectIdRepo = styled.div<IInputSelectIdRepoProps>`
  width: 500px;
  position: relative;
  pointer-events: ${({ disabled }) => disabled ? "none" : "all"};
  @media (max-width: 860px) {
    width: 100%;
  }
  .id-repo {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-color: var(--color-background-light);
    padding: 0.1rem 0.3rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    z-index: 10;
    cursor: pointer;
    ${animationsPresence.scale};
  }
  .select-repositories-modal {
    width: 100%;
    background-color: var(--color-background-light);
    padding: 1.5rem 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: absolute;
    z-index: 5;
    ${animationsPresence.translateDown};
    /* .input-link-other-repositorie{
      width: 100%;
      input{
        width: 100%;
        border: none;
        border-radius: .3rem;
        padding: .4rem 1rem;
      }
    } */
    .results-search-repositories {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      padding-right: 0.4rem;
      gap: 0.5rem;
      li {
        width: 100%;
      }
      .not-found-repositories {
        text-align: center;
      }
      .repository-result {
        display: flex;
        gap: 1rem;
        &:hover span {
          color: #fff;
          border: 1.3px solid #ffe6024d;
        }
        span {
          width: calc(70% - 1rem);
          padding: 0.5rem 1rem;
          cursor: pointer;
          color: #ffffffb4;
          background-color: #ffffff15;
          border-radius: 0.4rem;
          border: 1.3px solid #ffffff25;
          transition: 0.2s;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
    }
  }
`;
