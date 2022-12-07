import MyCitiesCard from "./MyCitiesCard";
import { StyledMyCitiesModal } from "./styles/MyCitiesModal.styled"

let MyCitiesModal = ({ open, setOpenModal, units, myCities, removeCity, setData, toggleNotification }) => {
    //Show or hide modal
    if (!open) return null;
    return (
        <StyledMyCitiesModal>
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
                            : myCities.map((x, i) => <MyCitiesCard key={x} index={i} city={x} units={units} removeCity={removeCity} setData={setData} setOpenModal={setOpenModal} toggleNotification={toggleNotification}></MyCitiesCard>)}
                    </div>
                </div>
            </div>
        </StyledMyCitiesModal>
    )
}

export default MyCitiesModal;