import { StyledNotificationModal } from "./styles/NotificationModal.styled"

let NotificationModal = (props) => {
    return (
        <StyledNotificationModal>
            {props.city && <p className="success">Successfully fetched weather data for {props.city}!</p>}
            {props.error && <p className="error">Failed to fetch weather data!</p>}
            {props.addedCity && <p className="success">Added {props.addedCity} to My Cities!</p>}
            {props.removedCity && <p className="error">Removed {props.removedCity} from My Cities!</p>}
            {props.defaultCity && <p className="success">Default city set to {props.defaultCity}!</p>}
        </StyledNotificationModal>
    )
}

export default NotificationModal;