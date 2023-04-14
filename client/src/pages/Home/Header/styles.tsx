import styled from "styled-components";

export const Header = styled.section`
  width: 400px;
  min-height: 100%;
  border-radius: 1.5rem;
  flex: none;
  color: var(--color-dark);
  background-color: var(--color-light);
  padding: 1rem 2rem 6rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: var(--font-Alegreya);
  box-shadow: 1px 1px 20px #00000025;
`;

export const AboutMe = styled.div`
  width: 100%;
  margin-bottom: 70px;
  h1 {
    font-size: var(--font-size-large);
    margin-bottom: 20px;
  }
  h3 {
    font-size: var(--font-size-small);
    color: var(--color-dark-light);
    margin-bottom: -0.2rem;
  }
  p {
    font-size: var(--font-size-small);
  }
  nav {
    margin-top: 20px;
    display: flex;
    gap: 1rem;
    a {
      all: unset;
      border: 1.3px solid var(--color-dark);
      font-size: var(--font-size-small);
      padding: 0.4rem 1rem;
      border-radius: 0.2rem;
      cursor: pointer;
      transition: 0.2s;
      display: flex;
      align-items: center;
      &:hover {
        background-color: var(--color-dark);
        color: var(--color-light);
      }
    }
  }
`;

export const ImageBox = styled.div`
  width: 190px;
  height: 190px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 2rem;
  img {
    width: auto;
    height: 100%;
  }
`;

export const TextProjectsGit = styled.div`
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  h2 {
    line-height: 1.3rem;
  }
  span {
    flex: none;
    background-color: var(--color-dark);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--color-light);
    font-size: 0.9rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.6rem;
  }
`;

export const PercentTechs = styled.div`
  margin-bottom: 70px;
  .title {
    display: flex;
    align-items: center;
    span {
      flex: none;
      background-color: var(--color-dark);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--color-light);
      font-size: 0.9rem;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 0.6rem;
    }
    h2 {
      line-height: 1.3rem;
    }
  }
`;

export const ContactMe = styled.div`
  h3 {
    font-size: var(--font-size-small);
    color: var(--color-dark-light);
    margin-bottom: -0.2rem;
  }
  h1 {
    font-size: var(--font-size-large);
    margin-bottom: 20px;
  }
  p {
    font-size: var(--font-size-small);
  }
  ul {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.6rem;
    li {
      a {
        all: unset;
        color: var(--color-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.3rem;
        cursor: pointer;
        span {
          @media (min-width: 400px) {
            transition: transform 0.3s ease-out, opacity 0.2s 0.2s;
          }
        }
        &:hover > span {
          @media (min-width: 400px) {
            transform: translateX(43px);
            opacity: 0;
          }
        }
        &:hover > i {
          @media (min-width: 400px) {
            transform: translateX(-25px) scale(1.6);
          }
        }
        i {
          font-size: 1.2rem;
          margin-left: 0.4rem;
          transition: transform 0.2s;
          background-color: var(--color-light);
          position: relative;
          &::after {
            content: "";
            position: absolute;
            background-color: var(--color-light);
            height: 100%;
            width: 30px;
            @media (max-width: 400px) {
              display: none;
            }
          }
        }
      }
    }
  }
`;

export const TextCopyRigth = styled.p`
    margin-top: 70px;
  text-align: center;
  line-height: 1rem;
`;
