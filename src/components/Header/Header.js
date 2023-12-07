import './style.scss';
import logo from '../../assets/swedbank_logo.png';
import home from '../../assets/home.svg';
import wallet from '../../assets/wallet.svg';

const Header = () => {
    return (
        <header className="header" id="header" role="banner">
            <div className="header__toolbar-wrapper">
                <a className="ui-logo" href="/">
                    <img alt="Swedbank logo"
                         src={logo}/></a>
            </div>
            <div className="header__wrapper">
                <div className="header__wrapper-nav selected">
                    <img alt="Home Tab" src={home}/>
                    <span>Home</span>
                </div>
                <div className="header__wrapper-nav">
                    <img alt="Everyday banking tab" src={wallet}/>
                    <span>Everyday banking</span>
                </div>
            </div>
        </header>
    )
}

export default Header
