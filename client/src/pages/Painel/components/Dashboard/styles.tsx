import styled from "styled-components";



export const Dashboard = styled.div`
    padding: 5rem 0;
    .dash-projects{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        li{
            height: 180px;
            background: var(--color-light);
            color: var(--color-dark);
            border-radius: .7rem;
            
            padding: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: default;
            position: relative;
            h3{
                font-size: 1.4rem;
                line-height: 1.4rem;
                text-transform: uppercase;
                text-align: center;
            }
            span{
                margin-top: 1rem;
                display: flex;
                align-items: center;
                h4{
                    font-size: 1rem;
                    text-transform: uppercase;
                    line-height: 1rem;
                }
                i{
                    font-size: 1.7rem;
                    margin-right: 1rem;
                }
            }
        }
    }
    .dash-types{
        width: 700px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
        @media (max-width: 750px) {
            width: 100%;
        }
        li{
            background-color: var(--color-yellow);
            color: var(--color-dark);
            text-align: center;
            padding: 1.4rem;
            border-radius: .4rem;
            h3{
                font-size: 1.5rem;
            }
            h4{
                text-transform: uppercase;
                font-size: 1.1rem;
            }
        }
    }

`