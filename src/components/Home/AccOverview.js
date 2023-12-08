const AccOverview = () => {
    return (
        <div className="acc-overview">
            <div className="th text-left">Account</div>
            <div className="th text-right hide-mobile">Balance</div>
            <div className="th text-right hide-mobile">Credit</div>
            <div className="th text-right hide-mobile">Reserved</div>
            <div className="th text-right">Available</div>
            {/* Rows */}
            <div className="tr text-left">EE02348032750380</div>
            <div className="tr text-right hide-mobile">302.30</div>
            <div className="tr text-right hide-mobile">10.00</div>
            <div className="tr text-right hide-mobile">300.00</div>
            <div className="tr text-right">900.00 EUR</div>
            <div className="tr text-left">EE35784018514544</div>
            <div className="tr text-right hide-mobile">562.30</div>
            <div className="tr text-right hide-mobile">1.00</div>
            <div className="tr hide-mobile"></div>
            <div className="tr text-right">123.56 EUR</div>
            {/* Total */}
            <div className="tr text-left"><b>Total</b></div>
            <div className="tr text-right hide-mobile"><b>999.00</b></div>
            <div className="tr text-right hide-mobile"><b>456.56</b></div>
            <div className="tr hide-mobile"></div>
            <div className="tr text-right"><span className="total">456.56</span> EUR</div>
        </div>
    )
}

export default AccOverview
