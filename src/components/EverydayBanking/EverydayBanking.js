import {Tab, Tabs} from "../Ui/Tab/Tab";
import {useTabs, withTabs} from "../Ui/Tab/TabContext";
import PaymentTab from "./PaymentTab";
import CalculatorTab from "./CalculatorTab";
import Button from "../Ui/Button/Button";
import './style.scss';

const tabs = {
    payment: 'Payment',
    calculator: 'Calculator'
}

const EverydayBanking = () => {
    const {setCurrentTab} = useTabs();
    return (
        <>
            <h1 className="ui-title">Everyday banking</h1>
            <Tabs defaultTab={tabs.payment} tabs={tabs} onTabSelect={(tab) => setCurrentTab(tab)} className="everyday-banking__tab-container">
                <Tab id={tabs.payment}>
                    <PaymentTab/>
                </Tab>
                <Tab id={tabs.calculator}>
                    <CalculatorTab/>
                </Tab>
            </Tabs>
            <section className="ui-section">
                <div className="everyday-banking__static-content ui-flex-row">
                    <div className="hello-balloon">
                        Hello world!
                    </div>
                    <div className="ui-flex-col ui-flex-grow">
                        <h3>Welcome to Swedbank!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div className="ui-flex-row ui-space-between ui-align-center">
                            <a href="#" className="ui-link">Read more</a>
                            <Button label={"Go"} variant={"primary"}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default withTabs(EverydayBanking)
