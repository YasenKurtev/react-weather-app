import styled from "styled-components";

export let StyledNotificationModal = styled.div`
    position: fixed;
    top: 4%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: green;
    width: 30%;
    border-radius: 20px;

    p{
        margin:0;
        padding: 5px;
        font-size: 20px;
        text-align: center;
        font-style: italic;
    }
`