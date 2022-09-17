import styled from "styled-components"

export let StyledModal = styled.div`
    .overlay{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-container{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 13.5rem;
        padding: 10px;
        box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        background-image: ${props => props.theme.bodyBackgroundColor};
    }

    .modal-title-container{
        display: flex;
        justify-contetnt: flex-start;
        align-items: center;
        gap: 10px;
        width: 100%;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 3px solid ${props => props.theme.textColor};
    }

    p{
        margin: 0;
        font-size: 0.9rem;
        font-weight: 600;
        color: ${props => props.theme.textColor};
    }

    i{
        font-size: 0.9rem;
        color: ${props => props.theme.iconColor};
    }

    .close-btn{
        position: fixed;
        right: 10px;
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }

    .close-btn i{
        color: ${props => props.theme.iconColor};
    }

    .close-btn:hover{
        color: ${props => props.theme.selectedUnitsColor};
    }

    .myCities-cards-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
    }

    .empty-list-container{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .no-cities{
        font-size: 0.7rem;
        font-weight: 600;
        margin: 0;
        padding: 40px 0;
    }
`