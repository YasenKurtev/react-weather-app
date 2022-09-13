import { useEffect } from "react";
import useMyCities from "../hooks/useMyCitiesHook";
import MyCitiesCard from "./MyCitiesCard";
import { StyledModal } from "./styles/Modal.styled"

let Modal = ({ open, setOpenModal, units, myCities, removeCity }) => {

    if (!open) return null;
    return (
        <StyledModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="title-container">
                        <i class="fa-solid fa-bars"></i>
                        <p>My Cities</p>
                        <button className="close-btn" onClick={() => setOpenModal(false)}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>

                    <div className="myCities-cards">

                        {myCities.length === 0
                            ? <div className="empty-list">
                                <i class="fa-solid fa-ban"></i>
                                <p className="no-cities"><i>There are currently no added cities.</i></p>
                            </div>
                            : myCities.map((x, i) => <MyCitiesCard key={x} index={i} city={x} units={units} removeCity={removeCity}></MyCitiesCard>)}
                    </div>

                </div>
            </div>
        </StyledModal>
    )
}

export default Modal