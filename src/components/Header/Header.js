import './style.scss';
import logo from '../../assets/swedbank_logo.png';
import home from '../../assets/home.svg';
import wallet from '../../assets/wallet.svg';
import {Link} from "react-router-dom";
import {useState} from "react";

const Header = () => {
    const [active, setActive] = useState('home')
    return (
        <header className="header" id="header" role="banner">
            <div className="header__toolbar-wrapper">
                <Link className="ui-logo" to="/">
                    <img alt="Swedbank logo"
                         src={logo}/></Link>
            </div>
            <div className="header__wrapper">
                <Link className={`${active === 'home' ? 'header__wrapper-nav active' : 'header__wrapper-nav'}`} to="/" onClick={() => setActive('home')}>
                    <img alt="HomePage Tab" src={home}/>
                    <span>Home</span>
                </Link>
                <Link className={`${active === 'everyday' ? 'header__wrapper-nav active' : 'header__wrapper-nav'}`} to="/everyday-banking" onClick={() => setActive('everyday')}>
                    <img alt="Everyday banking tab" src={wallet}/>
                    <span>Everyday banking</span>
                </Link>
            </div>
        </header>
    )
}

export default Header
