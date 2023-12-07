import Button from "../Ui/Button/Button";
import SelectField from "../Ui/SelectField/SelectField";
import Form from "../Ui/Form/Form";
import {useEffect, useState} from "react";
import SelectRange from "../Ui/SelectRange/SelectRange";

const optionsYear = [
    {value: '30', label: '30 years'},
    {value: '25', label: '25 years'},
    {value: '20', label: '20 years'},
    {value: '15', label: '15 years'},
    {value: '10', label: '10 years'},
    {value: '7', label: '7 years'},
    {value: '5', label: '5 years'}
]
const optionsInt = [
    {value: '4.5', label: '4.5 %'},
    {value: '4', label: '4.0 %'},
    {value: '3.5', label: '3.5 %'}
]
const loanSizeMin = '32000'
const loanSizeMax = '320000'

const CalculatorTab = () => {
    const [loanSize, setLoanSize] = useState('0')
    const [period, setPeriod] = useState('0')
    const [interest, setInterest] = useState('0')
    const [payment, setPayment] = useState(0)
    const handleSubmit = (data) => {
        console.log(Object.fromEntries(data.entries()));
    }

    useEffect(() => {
            !!loanSizeMax ? setLoanSize(loanSizeMin) : setLoanSize('0')
            !!optionsYear.length ? setPeriod(optionsYear[0].value) : setPeriod('0');
            !!optionsInt.length ? setInterest(optionsInt[0].value) : setInterest('0');
        }, []
    )

    const calculateMonthlyPayment = () => {
        console.log(loanSize, period, interest)
        //todo: check function and make slider component

        // to the number of monthly payments.
        const principal = parseFloat(loanSize);
        const interestAnnual = parseFloat(interest) / 100 / 12;
        const payments = parseFloat(period) * 12;

        // compute the monthly payment figure
        const x = Math.pow(1 + interestAnnual, payments); //Math.pow computes powers
        const monthly = (principal * x * interestAnnual) / (x - 1);

        // Check that the result is a finite number. If so, display the results.
        if (!isNaN(monthly) &&
            (monthly !== Number.POSITIVE_INFINITY) &&
            (monthly !== Number.NEGATIVE_INFINITY)) {
            setPayment(Math.round(monthly))
        } else setPayment(0)
    }
    useEffect(
        calculateMonthlyPayment, [loanSize, period, interest]
    )
    return (
        <Form onSubmit={handleSubmit}>
            <div className="ui-flex-row calculator-container">
                <div className="ui-form calculator-container__form">
                    <SelectRange
                        name="loan-size"
                        label="Loan size"
                        min={loanSizeMin}
                        max={loanSizeMax}
                        onChange={(e) => setLoanSize(e.target.value)}/>
                    <SelectField required options={optionsYear} label="Period" name="num-of-years" onClick={(e) => setPeriod(e.target.value)}/>
                    <SelectField required options={optionsInt} label="Interest" name="interest" onClick={(e) => setInterest(e.target.value)}/>
                </div>
                <hr/>
                <div className="calculator-container__result">
                    <div className="ui-flex-row ui-space-between">
                        <p>Monthly payment</p>
                        <div className="calculator-container__result-payment">{payment}<small>EUR</small></div>
                    </div>
                    <hr/>
                    <Button label="Apply" variant="primary" type="submit"/>
                </div>
            </div>
        </Form>
    )
}

export default CalculatorTab
