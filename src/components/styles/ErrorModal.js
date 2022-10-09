import { StyledErrorModal } from "./ErrorModal.styled";

let ErrorModal = ({ open, setOpenModal }) => {

    if (!open) return null;
    return (
        <StyledErrorModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="message-container">
                        <p className="error-message"><i>Maximum amount of stored cities reached!</i></p>
                        <p className="error-message"><i>Please, remove a city in order to add a new one!</i></p>
                    </div>
                    <div className="close-btn" onClick={() => setOpenModal(false)}>
                        <i class="fa-solid fa-x"></i> close
                    </div>
                </div>
            </div>
        </StyledErrorModal>
    )
}

export default ErrorModal;