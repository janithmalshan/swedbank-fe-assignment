import {bool, func} from "prop-types";

const Burger = ({ open, setOpen, ...props }) => {
    return (
        <button className="burger-menu" open={open} onClick={() => setOpen(!open)} {...props}>
            <div />
            <div />
            <div />
        </button>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
