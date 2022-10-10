import { StyledFooter } from "./styles/Footer.styled";

let Footer = () => {
    return (
        <StyledFooter>
            <p className="dev"><i>Developed by Yasen Kurtev 2022</i></p>
            <div className="social-container">
                <p className="contact"><i>Contact me:</i></p>
                <ul className="social-list">
                    <li className="social-item">
                        <a className="social-link" href="https://github.com/YasenKurtev"><i className="fa-brands fa-github"></i></a>
                    </li>
                    <li className="social-item">
                        <a className="social-link" href="mailto:yasenkurtev1@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    </li>
                    <li className="social-item">
                        <a className="social-link" href="https://www.facebook.com/yasen.kurtev.3/"><i className="fa-brands fa-facebook"></i></a>
                    </li>
                    <li className="social-item">
                        <a className="social-link" href="https://www.instagram.com/yasenkurtev10/"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </StyledFooter>
    )
}

export default Footer;