import styled from "styled-components";

export let StyledNotificationModal = styled.div`
    position: fixed;
    z-index: 1;
    top: 33px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    animation: fadeIn 3s forwards;

    p{
        margin:0;
        padding: 5px;
        font-size: 0.7rem;
        text-align: center;
        font-weight: 600;
        font-style: italic;
    }

    .success{
        background-color: #2ecc71;
        border-radius: 20px;
    }

    .error{
        background-color: #e74c3c;
        border-radius: 20px;
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

    @media (min-width: 320px) and (max-width: 575px){
        width: 90%;
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 90%;
    }
    
    @media (min-width: 768px) and (max-width: 991px){
        width: 90%;
    }
    
    @media (min-width: 992px) and (max-width: 1199px){
        width: 90%;
    }
`