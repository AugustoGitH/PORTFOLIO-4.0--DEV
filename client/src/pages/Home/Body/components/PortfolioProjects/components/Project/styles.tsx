import styled from "styled-components";
import animationsPresence from "../../../../../../../animations/presence";

export const Project = styled.li`
    flex: none;
  width: 100%;
  height: calc(200px + 3rem);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 3rem;
  ${animationsPresence.translateRight};
  @media (max-width: 1180px) {
    flex-direction: column;
    height: calc(550px + 3rem);
  }
  @media (max-width: 400px) {
    height: calc(450px + 3rem);
  }
  
`;

export const ImagesCover = styled.div`
  width: 300px;
  height: 100%;
  @media (max-width: 1180px) {
    width: 100%;
    height: 60%;
  }
  @media (max-width: 400px) {
    height: 50%;
  }
  .cover {
    width: 100%;
    height: 75%;
    border-radius: 0.5rem;
    background-color: #e8ecec21;
    border-radius: 1rem;
    overflow: hidden;
    transition: 0.2s;
    cursor: pointer;
    @media (max-width: 1180px) and (min-width: 650px) {
      height: 70%;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .images-project {
    width: 100%;
    height: 25%;
    padding-top: 0.7rem;
    display: flex;
    gap: 0.5rem;
    
    .image-empty{
        cursor: default;
        color: #ffffffa4;
        &:hover{
            transform: scale(1);
        }
        &::after{
            display: none;
        }
    }
    li {
      width: 100%;
      height: 100%;
      background-color: #e8ecec21;
      
      border-radius: 0.4rem;
      transition: 0.2s;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #29292730;
        backdrop-filter: blur(0.4px);
        transition: 0.2s;
      }
      &:hover {
        transform: scale(1.1);
        &::after {
          opacity: 0;
        }
        &::before{
          transform: translateY(0);
          opacity: 1;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;

export const Description = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  padding-left: 1.5rem;
  position: relative;
  @media (max-width: 1180px) {
    padding: 1.3rem 3%;
    width: 100%;
    height: 40%;
  }
  @media (max-width: 500px) {
    padding: 1.3rem 0;
  }
  @media (max-width: 400px) {
    height: 50%;
  }
  .technologies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.7rem;
    text-transform: uppercase;
    flex-wrap: wrap;
    cursor: default;
    gap: 0.4rem;
    li {
      background-color: rgb(68, 67, 67);
      padding: 0.3rem;
      font-size: 0.7rem;
      border-radius: 0.3rem;
      color: rgba(255, 255, 255, 0.795);
      @media (max-width: 400px){
        font-size: 0.6rem;
      }
    }
  }
  h4 {
    font-size: var(--font-size-small);
    color: var(--color-yellow);
    text-transform: capitalize;
    margin-bottom: 0.4rem;
    @media (max-width: 400px){
        font-size: calc(var(--font-size-small) - .1rem);
    }
  }
  h2 {
    text-transform: capitalize;
    line-height: 1.5rem;
    @media (max-width: 400px){
        font-size: 1.4rem;
        line-height: 1.3rem;
    }

  }
  nav {
    margin-top: 0.9rem;
    a {
      all: unset;
      cursor: pointer;
      margin-right: 1rem;
      color: rgba(255, 255, 255, 0.788);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: 0.3s;
      font-size: 1rem;
      @media (max-width: 400px){
        font-size: .9rem;
      }
      i {
        margin-left: 0.3rem;
      }
      &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1.3px;
        background-color: rgba(255, 255, 255, 0.788);
        bottom: 0;
        left: 0;
        transition: 0.3s;
      }
      &:hover::after {
        width: 100%;
        background-color: var(--color-light);
      }
      &:hover {
        color: var(--color-light);
      }
    }
  }
  .statistics{
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
    .button-like{
        cursor: pointer;
        transition: .3s;
        position: relative;
        &:hover{
            background-color: var(--color-yellow) ;
            i{ color: var(--color-dark); }
            &::after{
              transform: translateY(0);
              opacity: 1;
            }
        }
        &::after{
          content: "Curtir projeto";
          position: absolute;
          background-color: var(--color-dark);
          width: 80px;
          text-align: center;
          padding: .2rem 0;
          border-radius: .2rem;
          font-size: .6rem;
          pointer-events: none;
          bottom: -1.9rem;
          left: -1.4rem;
          transform: translateY(-15px);
          opacity: 0;
          transition: .2s;
        }
    }
    .liked{
      background-color: var(--color-yellow) ;
      i { color: var(--color-dark); }
      &::after{
          content: "Projeto curtido";
          position: absolute;
          background-color: var(--color-dark);
          width: 90px;
          text-align: center;
          padding: .2rem 0;
          border-radius: .2rem;
          font-size: .6rem;
          pointer-events: none;
          bottom: -1.9rem;
          left: -1.6rem;
          transform: translateY(-15px);
          opacity: 0;
          transition: .2s;
        }
    }
    
    li{
        font-size: .7rem;
        background: rgb(58, 57, 57);
        padding: .2rem .7rem;
        color: #d0d0d0;
        cursor: default;
        border-radius: .4rem;
        @media (max-width: 400px){
            font-size: .6rem;
        }
        /* border: 1px solid  #e9ba5b3d; */
    }
  }
`;
