import './style.scss';
import icFB from '../../assets/socialMediaIcons/facebook.svg'
import icInsta from '../../assets/socialMediaIcons/instagram.svg'
import icYoutube from '../../assets/socialMediaIcons/youtube.svg'
import icX from '../../assets/socialMediaIcons/twitter.svg'
import icSkype from '../../assets/socialMediaIcons/skype.svg'

const Footer = () => {
    return (
        <footer className="footer ui-flex-col">
            <div className="page-content">
                <div className="footer__main page-content__wrapper">
                    <div className="footer__main__col ui-flex-col">
                        <h3>Contact</h3>
                        <h1>6 310 310</h1>
                        <a href="mailto:info@swedbank.ee" className="ui-link">info@swedbank.ee</a>
                        <p className="footer-address">
                            SWEDBANK AS <br/>
                            Liivalaila 8, 15040 Tallinn <br/>
                            SWIFT kood/BIC: SWDW9E2X<br/>
                            Reg. number: 10060701
                        </p>
                        <ul>
                            <SocialItemLink alt="facebook" src={icFB} />
                            <SocialItemLink alt="instagram" src={icInsta} />
                            <SocialItemLink alt="facebook" src={icYoutube} />
                            <SocialItemLink alt="facebook" src={icX} />
                            <SocialItemLink alt="facebook" src={icSkype} />
                        </ul>
                    </div>
                    <div className="footer__main__col ui-flex-col">
                        <h3>Quicklinks</h3>
                        <ul>
                            <ItemLink label="Calculators"/>
                            <ItemLink label="Prices"/>
                            <ItemLink label="Terms of service"/>
                            <ItemLink label="Privacy and security"/>
                        </ul>
                    </div>
                    <div className="footer__main__col ui-flex-col">
                        <h3>Jobs Swedbank</h3>
                        <ul>
                            <ItemLink label="Client programs"/>
                            <ItemLink label="Business customers"/>
                            <ItemLink label="Jobs"/>
                            <ItemLink label="Internships"/>
                        </ul>
                    </div>
                    <div className="footer__main__col ui-flex-col">
                        <h3>Tooted</h3>
                        <ul>
                            <ItemLink label="Everyday banking"/>
                            <ItemLink label="Loans"/>
                            <ItemLink label="Insurance"/>
                            <ItemLink label="Cards"/>
                            <ItemLink label="Stocks"/>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="page-content">
                    <p className="disclaimer">
                        This is a website of companies offering financial services – Swedbank AS, Swedbank Liising AS, Swedbank P&C Insurance AS, Swedbank Life Insurance SE, and Swedbank Investeerimisfondid AS. Before entering into any agreement read the terms and conditions of the respective service. Consult a specialist, where necessary. Swedbank AS does not provide a credit advisory service for the purposes of the Creditors and Credit Intermediaries Act. The borrower makes the decision of taking out a loan, who assesses the suitability of the loan product and contractual terms to his personal loan interest, need and financial situation on the basis of the information and warnings presented by the bank and is responsible for the consequences related to concluding the agreement.
                    </p>
                </div>
            </div>
        </footer>
    )
}

const ItemLink = ({ label }) => {
    return (
        <li>
            <a className="ui-link">{label}</a>
        </li>
    )
}

const SocialItemLink = ({ alt, src }) => {
    return (
        <li className="social-item-link">
            <a href='#'>
                <img src={src} alt={alt}/>
            </a>
        </li>
    )
}

export default Footer
