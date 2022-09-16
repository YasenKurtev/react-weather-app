import styled from "styled-components";

export let StyledLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 30px;

    p{
        color: ${props => props.theme.textColor};
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0;
    }

    .lds-dual-ring {
        display: inline-block;
        width: 2.7rem;
        height: 2.7rem;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 2.1rem;
        height: 2.1rem;
        margin: 8px;
        border-radius: 50%;
        border: 0.3rem solid ${props => props.theme.textColor};
        border-color: ${props => props.theme.textColor} transparent ${props => props.theme.textColor} transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }

    
}
`