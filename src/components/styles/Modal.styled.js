import styled from "styled-components"

export let StyledModal = styled.div`

.overlay{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: transparent;
}

.modal-container{
    padding: 10px;
    max-width: 800px;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-image: ${props => props.theme.bodyBackgroundColor};;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
}
`