import MyCitiesCard from "./MyCitiesCard";
import { StyledModal } from "./styles/Modal.styled"

let ErrorModal = ({ open, setOpenModal, units, myCities, removeCity, setData }) => {

    if (!open) return null;
    return (
        <StyledModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <p className="error-message"><i>Maximum amount of stored cities reached!</i></p>
                    <p className="error-message"><i>Please, remove a city in order to add a new one!</i></p>
                    <button className="close-btn" onClick={() => setOpenModal(false)}>
                        <i class="fa-solid fa-x"></i>Close
                    </button>
                </div>
            </div>
        </StyledModal>
    )
}

export default ErrorModal;