import { useEffect } from "react";
import useMyCities from "../hooks/useMyCitiesHook";
import MyCitiesCard from "./MyCitiesCard";
import { StyledModal } from "./styles/Modal.styled"

let Modal = ({ open, setOpenModal, units, myCities, removeCity, setData }) => {

    if (!open) return null;
    return (
        <StyledModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-title-container">
                        <i class="fa-solid fa-bars" id="ico"></i>
                        <p className="title"><i>My Cities</i></p>
                        <button className="close-btn" onClick={() => setOpenModal(false)}>
                            <i class="fa-solid fa-x"></i>
                        </button>
                    </div>
                    <div className="myCities-cards-container">
                        {myCities.length === 0
                            ? <div className="empty-list-container">
                                <i class="fa-solid fa-ban"></i>
                                <p className="no-cities"><i>No added cities</i></p>
                            </div>
                            : myCities.map((x, i) => <MyCitiesCard key={x} index={i} city={x} units={units} removeCity={removeCity} setData={setData} setOpenModal={setOpenModal}></MyCitiesCard>)}
                    </div>
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal