import { StyledFetchError } from "./styles/FetchError.styled"

let FetchError = () => {
    return (
        <StyledFetchError>
            <i class="fa-solid fa-xmark"></i>
            <p className="error-message">Failed to fetch weather data!</p>
            <p className="error-message">Please try again!</p>
        </StyledFetchError>
    )
}

export default FetchError