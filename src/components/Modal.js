import MyCitiesCard from "./MyCitiesCard";
import { StyledModal } from "./styles/Modal.styled"

let Modal = ({ open, setOpenModal }) => {
    if (!open) return null;
    return (
        <StyledModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container">
                    <div className="title-container">
                        <i class="fa-solid fa-bars"></i>
                        <p>My Cities</p>
                    </div>

                    <div className="myCities-cards">
                        <MyCitiesCard></MyCitiesCard>
                    </div>

                </div>
            </div>
        </StyledModal>
    )
}

export default Modal