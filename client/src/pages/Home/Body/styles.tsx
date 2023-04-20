import styled from "styled-components";

export const Body = styled.section`
  width: calc(100% - 400px);
  padding: 0 2rem;
  color: var(--color-light);
  @media (max-width: 920px) {
    width: 100%;
    padding: 0rem 2rem 2rem 2rem ;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 0rem .5rem .5rem .5rem ;
  }
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1040px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 920px) {
    flex-direction: row-reverse;
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

export const TechPresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
  @media (max-width: 1040px) {
    width: 100%;
    align-items: flex-start;
    text-align: start;
  }
  @media (max-width: 920px) {
    width: auto;
  }
  @media (max-width: 650px) {
    width: 100%;
    align-items: flex-start;
    text-align: start;
  }
  @media (max-width: 500px){
    padding: 0 2rem;
  }
  h3 {
    font-size: var(--font-size-small);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: var(--color-yellow);
      font-size: 1.4rem;
      margin-left: 0.4rem;
    }
  }
  article {
    margin: 3rem 0;
    @media (max-width: 500px){
        margin: 1.5rem 0;
    }
    h2 {
      font-size: var(--font-size-medium);
      color: var(--color-yellow);
      font-weight: bold;
    }
    h1 {
      margin-top: -0.1rem;
      font-size: 3rem;
      line-height: 3.4rem;
      position: relative;
      width: 100%;
      #sobrenome-ocult {
        display: none;
        @media (max-width: 1040px) {
            display: inline-block;
        }
        @media (max-width: 920px) {
            display: none;
        }
        @media (max-width: 650px) {
            display: inline-block;
        }
        @media (max-width: 500px){
            display: none;
        }
      }
    }
  }
  .skills {
    p {
      font-weight: bold;
      font-size: 1rem;
    }
    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 0.4rem;
      gap: 1.3rem;
      li {
        text-align: end;
        border: 1.5px solid rgba(255, 255, 255, 0.541);
        padding: 0.3rem 0.9rem;
        border-radius: 0.5rem;
        font-size: var(--font-size-small);
        color: rgba(255, 255, 255, 0.932);
        position: relative;
        cursor: default;
        transition: 0.3s;

        &::after {
          content: "";
          position: absolute;
          width: 3px;
          height: 20px;
          background-color: #201c1c;
          top: 50%;
          transform: translateY(-50%);
          transition: 0.3s;
          @media (max-width: 1180px) {
            right: -2px;
          }
          @media (min-width: 1180px) {
            left: -2px;
          }
        }
        &:hover {
          border: 1.5px solid var(--color-light);
        }
        &:hover::after {
          height: 0%;
        }
      }
    }
  }
  a {
    all: unset;
    display: inline-flex;
    align-items: center;
    background-color: var(--color-yellow);
    padding: 0.7rem 1.9rem 0.7rem 1rem;
    color: #000000;
    border-radius: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.9rem;
    text-transform: capitalize;
    /* letter-spacing: .1rem; */
    margin-top: 3rem;
    border: 1.5px solid var(--color-yellow);
    transition: 0.3s;
    position: relative;
    &:hover {
      background-color: transparent;
      color: var(--color-yellow);
    }
    i {
      margin-right: 1rem;
    }
  }
`;

export const ProfileImage = styled.div`
  overflow: hidden;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  padding-top: 4rem;
  margin-left: 10%;
  flex: none;
  @media (max-width: 1040px) {
    margin-left: 0;
    margin-bottom: 2rem;
  }
  @media (max-width: 920px) {
    margin-right: 10%;
    margin-bottom: 0;
  }
  @media (max-width: 650px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
  .profile-content {
    width: 300px;
    height: 300px;
    background-color: var(--color-yellow);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: 120%;
      margin-top: -3rem;
    }
  }
`;
