import MyCitiesCard from "./MyCitiesCard";
import { StyledModal } from "./styles/Modal.styled"

let Modal = ({ open, setOpenModal }) => {
    if (!open) return null;
    return (
        <StyledModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container">
                <MyCitiesCard></MyCitiesCard>
                </div>
                
            </div>
        </StyledModal>
    )
}

export default Modal