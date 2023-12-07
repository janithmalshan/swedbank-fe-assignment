import {useState} from "react";

const SelectRange = ({min, max, label, name, isError, ...props}) => {

    const [rangeValue, setRangeValue] = useState(min)
    let newValue = Number( (rangeValue - min) * 100 / (max - min) )
    let newPosition = 10 - (newValue * 0.2)
    // Todo: align center to the thumb

    return (
        <div className={isError ? 'ui-form-control error' : 'ui-form-control'}>
            {!!label && <label htmlFor={name} className="ui-form-control__label">{label}</label>}
            <div className="ui-form-control__content">
                <div className="ui-form-input-container ui-form-input-range">
                    <div className="range-value" style={{left: `${newValue}%`}}>{rangeValue} €</div>
                    <input type="range" name={name} min={min} max={max} {...props}
                           step="100"
                           onInput={(e) => setRangeValue(e.target.value)} />
                    <div className="ui-form-input-range__hint">
                        <span>{min} €</span>
                        <span>{max} €</span>
                    </div>
                    {isError && <small className="error-text">Something went wrong!</small>}
                </div>
            </div>
        </div>
    )
}

export default SelectRange
