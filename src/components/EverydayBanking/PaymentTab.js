import Form from "../Ui/Form/Form";
import InputField from "../Ui/InputField/InputField";
import SelectField from "../Ui/SelectField/SelectField";
import Button from "../Ui/Button/Button";

const optionsAccount = [
    { value: 'account_name_1', label: 'Account name 1'},
    { value: 'account_name_2', label: 'Account name 2'}
]
const optionsSaved = [
    { value: 'selectSaved1', label: 'Select 1'},
    { value: 'selectSaved2', label: 'Select 2'},
    { value: 'selectSaved3', label: 'Select 3'}
]
const optionsCurrency = [
    { value: 'EUR', label: 'EUR'},
    { value: 'USD', label: 'USD'}
]

const PaymentTab = () => {
    const handleSubmit = (data) => {
        console.log(data)
        console.log(Object.fromEntries(data.entries()));
    };
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <SelectField required options={optionsAccount} label="Account" name="account" />
                <SelectField required options={optionsSaved} label="Saved payments" name="saved-payments" />
                <InputField required isNumber label="Amount" name="amount">
                    <SelectField required options={optionsCurrency} name="currency" />
                </InputField>
                <InputField required label="Description" name="description" />
                <div className="ui-button-container">
                    <Button label={"Save"} variant={"secondary"} />
                    <Button label={"Pay"} type="submit" variant={"primary"} />
                </div>
            </Form>
        </>
    )
}

export default PaymentTab
