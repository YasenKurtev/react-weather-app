import styled from "styled-components"

export let StyledErrorModal = styled.div`
    .overlay{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    .modal-container{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: 100%;
        max-width: 13.5rem;
        padding: 10px;
        box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .message-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .message-container p i{
        margin: 0;
        font-size: 0.8rem;
        font-weight: 600;
        color: #e74c3c;
    }

    .error-message{
        margin-top: -5px;
    }

    .close-btn{
        background-color: transparent;
        border: 2px solid #f9fafa;
        border-radius: 10px;
        padding: 2px 4px;
        cursor: pointer;
        font-size: 0.7rem;
        font-weight: 600;
        color: #f9fafa;
    }

    .close-btn i{
        color: #f9fafa;
    }

    .close-btn:hover{
        background-color: #e74c3c;
    }
`