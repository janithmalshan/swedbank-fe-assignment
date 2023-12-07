import './style.scss';
import logo from '../../assets/swedbank_logo.png';
import home from '../../assets/home.svg';
import wallet from '../../assets/wallet.svg';
import {Link} from "react-router-dom";
import {useState} from "react";
import Burger from "./Burger";

const Header = () => {
    const [active, setActive] = useState('home')
    const [entered, setEntered] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <>
            <header className="header" id="header" role="banner">
                <div className="header__toolbar-wrapper">
                    <Link className="ui-logo" to="/">
                        <img alt="Swedbank logo"
                             src={logo}/></Link>
                    <Burger open={open} setOpen={setOpen} />
                </div>
                <div className={`${open ? 'header__wrapper open' : 'header__wrapper'}`}>
                    <Link
                        className={`${active === 'home' ? 'header__wrapper-nav active' : 'header__wrapper-nav'}`}
                        to="/"
                        onClick={() => {
                            setActive('home')
                            setEntered(false)
                            setOpen(false)
                        }}
                        onMouseEnter={() => setEntered(true)}
                        onMouseLeave={() => setEntered(false)}>
                        <img alt="HomePage Tab" src={home}/>
                        <span>Home</span>
                    </Link>
                    <Link
                        className={`${active === 'everyday' ? 'header__wrapper-nav active' : 'header__wrapper-nav'}`}
                        to="/everyday-banking"
                        onClick={() => {
                            setActive('everyday')
                            setEntered(false)
                            setOpen(false)
                        }}
                        onMouseEnter={() => setEntered(true)}
                        onMouseLeave={() => setEntered(false)}>
                        <img alt="Everyday banking tab" src={wallet}/>
                        <span>Everyday banking</span>
                    </Link>
                </div>
            </header>
            <div className={`${entered || open ? 'page-overlay' : ''}`}></div>
        </>
    )
}

export default Header
