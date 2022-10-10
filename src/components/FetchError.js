import { StyledFetchError } from "./styles/FetchError.styled"

let FetchError = () => {
    return (
        <StyledFetchError>
            <div className="error-container">
                <i class="fa-solid fa-xmark"></i>
                <p className="error-message">Failed to fetch weather data, please try again!</p>
            </div>
        </StyledFetchError>
    )
}

export default FetchError