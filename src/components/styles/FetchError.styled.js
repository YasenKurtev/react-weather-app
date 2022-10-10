import styled from "styled-components";

export let StyledFetchError = styled.div`
.error-message{
    color: ${props => props.theme.textColor};
    font-size: 25px;
    font-weight: 600;
    margin: 0;
}

.error-container{
    position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 20px;
}

.error-container i{
    font-size: 70px;
    color: ${props => props.theme.iconsColor};
}
`