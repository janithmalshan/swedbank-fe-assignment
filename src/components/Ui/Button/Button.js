const Button = ({label, variant, ...props}) => {
    return (
        <button
            type="button"
            className={[`button`, `button--${variant}`]}
            {...props}>
            {label}
        </button>
    )
}

export default Button
