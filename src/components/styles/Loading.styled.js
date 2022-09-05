import styled from "styled-components";

export let StyledLoading = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 20px;
gap: 20px;

p{
    color: #f9fafa;
    font-size: 25px;
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
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
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