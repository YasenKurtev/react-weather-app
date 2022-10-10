import styled from "styled-components";

export let StyledFetchError = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    gap: 20px;

.error-message{
    color: ${props => props.theme.textColor};
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0;
}

i{
    font-size: 2.3rem;
    color: ${props => props.theme.iconsColor};
}
`