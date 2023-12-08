import './style.scss';
import OfferElement from "./OfferElement";
import AccOverview from "./AccOverview";
import PDF from '../../assets/pdf.svg';

const Home = () => {
    return (
        <>
            <section className="ui-section">
                <div className="ui-space-between overview-header ui-align-center">
                    <h4 className="no-margin">Your Swedbank overview</h4>
                    <div>
                        <a className="save-link">
                            <img alt="Save PDF" src={PDF} />
                            PDF
                        </a>
                        <a className="save-link">
                            <img alt="Save XSL" src={PDF} />
                            XSL
                        </a>
                    </div>
                </div>
                <AccOverview />
            </section>
            <section className="ui-section">
                <div className="home__static-content ui-flex-row">
                    <OfferElement title="Open">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, nostrud consequat wisi ut aliquip exa am tempor incididunt commodo consequat.</p>
                    </OfferElement>
                    <OfferElement title="Caring">
                        <p>Lorem ipsum dolor sit am tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#" className="ui-link">Read more</a>
                    </OfferElement>
                    <OfferElement title="Simple">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                            nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="#" className="ui-link">Read more</a>
                    </OfferElement>
                </div>
            </section>
        </>
    )
}

export default Home
