import { StyledNotificationModal } from "./styles/NotificationModal.styled"

let NotificationModal = (props) => {
    return (
        <StyledNotificationModal>
            {props.city && <p>Successfully fetched weather data for {props.city}!</p>}
            {props.error && <p>Failed to fetch weather data!</p>}
            {props.addedCity && <p>Successfully added {props.addedCity} to My Cities!</p>}
            {props.removedCity && <p>Successfully removed {props.removedCity} from My Cities!</p>}
        </StyledNotificationModal>
    )
}

export default NotificationModal;