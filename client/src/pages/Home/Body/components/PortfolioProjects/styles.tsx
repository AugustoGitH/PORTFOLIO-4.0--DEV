import styled from "styled-components";



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
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

`