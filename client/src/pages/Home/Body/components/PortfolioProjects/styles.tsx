import styled from "styled-components";
import animationsPresence from "../../../../../animations/presence";



export const PortfolioProjects = styled.div`
    background-color: var(--color-background-light);
    margin-top: 3rem;
    border-radius: 1.5rem;
    padding: 3rem 1rem 1rem 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 1px 20px #00000025;
    transition: 0.3s;
    position: relative;
    h1{
        position: absolute;
        top: -1rem;
        margin-bottom: 1rem;
        text-transform: capitalize;
        text-align: center;
        line-height: 2rem;
        font-size: 2rem;
    }

`

export const FiltersTypesProject = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    li {
      text-transform: capitalize;
      margin: 0.4rem;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.3rem 1.4rem;
      transition: 0.3s;
      border-radius: 0.6rem;
      background-color: rgb(68, 67, 67);
      font-weight: bold;
      color: rgba(255, 255, 255, 0.815);
      &:hover {
        background-color: var(--color-yellow);
        color: var(--color-dark);
      }
    }
    .mark-button-filter {
      background-color: var(--color-yellow);
      color: var(--color-dark);
    }

`


export const ProjectsList = styled.ul`
  width: 100%;
  max-height: calc(((200px + 3rem) * 3) + (3rem * 3)) ;
  overflow: auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding-right: 1rem;
  padding-bottom: 3rem;
  @media (max-width: 1180px) {
    gap: 4rem;
  }
  @media (max-width: 500px) {
    padding: 0 .5rem;
  }
  &::-webkit-scrollbar {
      width: 3px;
      background-color: #c9abab1a;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-thumb {
      width: 100%;
      height: 90px;
      border-radius: 1rem;
      background-color: rgba(218, 197, 197, 0.253);
    }
    
  .project{
    border-bottom: 1.5px solid #ffffff1d;
  }
  .project:last-child{
    border-bottom: none
  }
  .loader-projects{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
  }
  .not-projects{
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${animationsPresence.scale};
    span{
      display: inline-block;
      background-color: #ffffff14;
      color: #ffffffab;
      padding: .3rem 1rem;
      border-radius: .3rem;
      cursor: default;
    }
  }

`