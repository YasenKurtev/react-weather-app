import styled from "styled-components";

export let StyledLoadingMini = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
gap: 10px;

p{
    color: ${props => props.theme.textColor};
    font-size: 20px;
    font-weight: 600;
    margin: 0;
}

.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${props => props.theme.textColor};
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
`