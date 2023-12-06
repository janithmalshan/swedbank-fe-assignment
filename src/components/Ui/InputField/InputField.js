import {useState} from "react";

const InputField = ({label, name, value, hint, isError, errorText, isNumber, children, ...props}) => {
    const [validationMessage, setValidationMessage] = useState();
    // const [required, setRequired] = useState()
    // const [onlyNumber, setOnlyNumber] = useState()

    const onInvalid = (e) => {
        const target = e.target;
        setValidationMessage(target.validationMessage);
    };

    const onBlur = (e) => {
        const target = e.target;
        console.log('0000', e.target.dataset.number, !!e.target.value)

        if (!!validationMessage) {
            setValidationMessage(target.validationMessage);
        }
        if (e.target.dataset.number && isNaN(e.target.value) && !!e.target.value) {
            console.log('00001', e.target.value)
            console.log(target.validationMessage)
            // setValidationMessage(target.validationMessage)
            target.setCustomValidity("Accepts only numbers");
        }
    };
    return (
        <div className={isError ? 'ui-form-control error' : 'ui-form-control'}>
            {!!label && <label htmlFor={name} className="ui-form-control__label">{label}</label>}
            <div className="ui-form-control__content">
                <div className="ui-form-input-container">
                    <input
                        name={name}
                        value={value}
                        onInvalid={onInvalid}
                        onBlur={onBlur}
                        data-number={isNumber}
                        className="ui-form-input"
                        {...props}/>
                    {!!validationMessage && <small className="error-text">{errorText || validationMessage}</small>}
                </div>
                {children}
            </div>
        </div>
    )
}

export default InputField
