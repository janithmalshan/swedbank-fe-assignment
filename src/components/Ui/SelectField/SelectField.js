import {useState} from "react";

const SelectField = ({options, label, name, ...props}) => {
    const [option, setOption] = useState()
    const handleOnChange = (e) => {
        setOption(e.target.value)
    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name} value={option} {...props} onChange={handleOnChange}>
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
            {!options?.length && <small>Something went wrong!</small>}
        </div>
    )
}

export default SelectField
