import '../../../styles/style.scss'
const Button = ({label, variant, ...props}) => {
    return (
        <button
            type="button"
            className={[`ui-button ui-button--${variant}`]}
            {...props}>
            {label}
        </button>
    )
}

export default Button
