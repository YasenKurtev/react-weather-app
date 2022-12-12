import styled from "styled-components";

export let StyledNotificationModal = styled.div`
    position: fixed;
    z-index: 1;
    top: 33px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: green;
    width: 30%;
    border-radius: 20px;
    animation: fadeIn 3s forwards;

    p{
        margin:0;
        padding: 5px;
        font-size: 20px;
        text-align: center;
        font-style: italic;
    }

    @keyframes fadeIn {
        0%{
            opacity: 0;
            top: -30px;
        }
        20%, 50%, 80%{
            opacity: 1;
            top: 33px;
        }
        100%{
            opacity: 0;
            top: -30px;
            visibility: hidden;
        }
      }
`