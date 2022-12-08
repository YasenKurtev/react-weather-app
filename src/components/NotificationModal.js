import { StyledNotificationModal } from "./styles/NotificationModal.styled"

let NotificationModal = (props) => {
    return (
        <StyledNotificationModal>
            {props.city && <p>Successfully fetched weather data for {props.city}!</p>}
            {props.error && <p>Failed to fetch weather data!</p>}
            {props.addedCity && <p>Added {props.addedCity} to My Cities!</p>}
            {props.removedCity && <p>Removed {props.removedCity} from My Cities!</p>}
            {props.defaultCity && <p>Default city set to {props.defaultCity}!</p>}
        </StyledNotificationModal>
    )
}

export default NotificationModal;