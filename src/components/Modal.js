import { useEffect } from "react";
import useMyCities from "../hooks/useMyCitiesHook";
import MyCitiesCard from "./MyCitiesCard";
import { StyledModal } from "./styles/Modal.styled"

let Modal = ({ open, setOpenModal, units, myCities, removeCity, setData }) => {
    //Show or hide modal
    if (!open) return null;
    return (
        <StyledModal>
            <div className="overlay" onClick={() => setOpenModal(false)}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-title-container">
                        <i className="fa-solid fa-bars" id="ico"></i>
                        <p className="title"><i>My Cities</i></p>
                        <button className="close-btn" onClick={() => setOpenModal(false)}>
                            <i className="fa-solid fa-x"></i>
                        </button>
                    </div>
                    {/* Render my cities list */}
                    <div className="myCities-cards-container">
                        {myCities.length === 0
                            ? <div className="empty-list-container">
                                <i className="fa-solid fa-ban"></i>
                                <p className="no-cities"><i>No added cities</i></p>
                            </div>
                            : myCities.map((x, i) => <MyCitiesCard key={x} index={i} city={x} units={units} removeCity={removeCity} setData={setData} setOpenModal={setOpenModal}></MyCitiesCard>)}
                    </div>
                </div>
            </div>
        </StyledModal>
    )
}

export default Modal;