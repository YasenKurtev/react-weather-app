import { StyledNotificationModal } from "./styles/NotificationModal.styled"

let NotificationModal = (props) => {
    let notificationText;
    let notificationClass;

    if (props.city) {
        notificationText = `Successfully fetched weather data for ${props.city}!`;
        notificationClass = 'success';
    } else if (props.error) {
        notificationText = `Failed to fetch weather data!`;
        notificationClass = 'error';
    } else if (props.addedCity) {
        notificationText = `Added ${props.addedCity} to My Cities!`;
        notificationClass = 'success';
    } else if (props.removedCity) {
        notificationText = `Removed ${props.removedCity} from My Cities!`;
        notificationClass = 'error';
    } else if (props.defaultCity) {
        notificationText = `Default city set to ${props.defaultCity}!`;
        notificationClass = 'success';
    }

    return (
        <StyledNotificationModal>
            <p className={notificationClass}>{notificationText}</p>
        </StyledNotificationModal>
    )
}

export default NotificationModal;