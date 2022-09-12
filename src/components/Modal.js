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
                        <button className="close-btn">
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>

                    <div className="myCities-cards">

                        {myCities.length === 0
                            ? <p className="no-cities"><i>There are currently no added cities.</i></p>
                            : myCities.map((x, i) => <MyCitiesCard id={i} city={x} units={units} removeCity={removeCity} setOpenModal={setOpenModal}></MyCitiesCard>)}
                    </div>

                </div>
            </div>
        </StyledModal>
    )
}

export default Modal