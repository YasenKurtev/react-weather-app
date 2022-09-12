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
    padding: 10px;
    max-width: 800px;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: ${props => props.theme.bodyBackgroundColor};;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
}

.myCities-cards{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

.title-container{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    margin-top: 5px;
}

p{
    margin: 0;
    font-size: 25px;
    font-weight: 600;
    color: ${props => props.theme.textColor};
}

i{
    font-size: 25px;
    color: ${props => props.theme.iconColor};
}

.close-btn{
    position: fixed;
    right: 20px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    
}

.close-btn:hover{
    color: ${props => props.theme.selectedUnitsColor};
}

.no-cities{
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    padding: 40px 0;
}

.empty-list{
    display: flex;
    align-items: center;
    gap: 10px;
}
`