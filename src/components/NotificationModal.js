import { StyledNotificationModal } from "./styles/NotificationModal.styled"

let NotificationModal = (props) => {
    let notificationText;
    let notificationClass;
    let iconClass;

    if (props.city) {
        notificationText = `Successfully fetched weather data for ${props.city}!`;
        notificationClass = 'notification-container-success';
        iconClass = 'fa-regular fa-circle-check';
    } else if (props.error) {
        notificationText = `Failed to fetch weather data!`;
        notificationClass = 'notification-container-error';
        iconClass = 'fa-regular fa-circle-xmark';
    } else if (props.addedCity) {
        notificationText = `Added ${props.addedCity} to My Cities!`;
        notificationClass = 'notification-container-success';
        iconClass = 'fa-regular fa-circle-check';
    } else if (props.removedCity) {
        notificationText = `Removed ${props.removedCity} from My Cities!`;
        notificationClass = 'notification-container-error';
        iconClass = 'fa-regular fa-circle-xmark';
    } else if (props.defaultCity) {
        notificationText = `Default city set to ${props.defaultCity}!`;
        notificationClass = 'notification-container-success';
        iconClass = 'fa-regular fa-circle-check';
    }

    return (
        <StyledNotificationModal>
            <div className={notificationClass}>
                <i className={iconClass}></i>
                <p>{notificationText}</p>
                <i className={iconClass}></i>
            </div>

        </StyledNotificationModal>
    )
}

export default NotificationModal;