import {useState} from "react";

const SelectField = ({options, label, name, isError, ...props}) => {
    const [option, setOption] = useState()
    const handleOnChange = (e) => {
        setOption(e.target.value)
    }
    return (
        <div className={isError ? 'ui-form-control error' : 'ui-form-control'}>
            {!!label && <label htmlFor={name} className="ui-form-control__label">{label}</label>}
            <div className="ui-form-control__content">
                <div className="ui-form-input-container">
                    <select name={name} value={option} {...props} onChange={handleOnChange} className="ui-form-select">
                        {
                            options.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))
                        }
                    </select>
                    {!options?.length && <small className="error-text">Something went wrong!</small>}
                </div>
            </div>
        </div>
    )
}

export default SelectField
