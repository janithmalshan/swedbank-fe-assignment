import {Tab, Tabs} from "../Ui/Tab/Tab";
import {useTabs, withTabs} from "../Ui/Tab/TabContext";
import PaymentTab from "./PaymentTab";
import CalculatorTab from "./CalculatorTab";
import './style.scss';

const tabs = {
    payment: 'Payment',
    calculator: 'Calculator'
}

const EverydayBanking = () => {
    const { setCurrentTab } = useTabs();
    return (
        <Tabs defaultTab={tabs.payment} tabs={tabs} onTabSelect={(tab) => setCurrentTab(tab)} className="everyday-banking__tab-container">
            <Tab id={tabs.payment}>
                <PaymentTab />
            </Tab>
            <Tab id={tabs.calculator}>
                <CalculatorTab />
            </Tab>
        </Tabs>
    )
}

export default withTabs(EverydayBanking)
