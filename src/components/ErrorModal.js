import { StyledErrorModal } from "./styles/ErrorModal.styled";

let ErrorModal = ({ open, setOpenModal }) => {
    //Show or hide modal
    if (!open) return null;
    return (
        <StyledErrorModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="message-container">
                        <p className="error-message"><i>Maximum amount of stored cities reached! Please, remove a city in order to add a new one!</i></p>
                    </div>
                    <div className="close-btn" onClick={() => setOpenModal(false)}>
                        <i className="fa-solid fa-x"></i> close
                    </div>
                </div>
            </div>
        </StyledErrorModal>
    )
}

export default ErrorModal;