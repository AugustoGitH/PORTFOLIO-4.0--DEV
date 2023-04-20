import styled from "styled-components";


type TLoaderDefaultProps = {
  color: "dark" | "light"
}

export const LoaderDefault = styled.div<TLoaderDefaultProps>`
  .loader {
    border: 4px solid ${props=> props.color === "dark" ? "var(--color-dark)" : "var(--color-light)"};
    border-left-color: transparent;
    border-radius: 50%;
  }

  .loader {
    border: 4px solid ${props=> props.color === "dark" ? "var(--color-dark)" : "var(--color-light)"};
    border-left-color: transparent;
    width: 36px;
    height: 36px;
  }

  .loader {
    border: 4px solid ${props=> props.color === "dark" ? "var(--color-dark)" : "var(--color-light)"};
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

`