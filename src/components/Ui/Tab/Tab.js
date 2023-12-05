import React, {useEffect} from 'react';
import {useTabs} from "./TabContext";
import './tab.scss';

export const Tabs = function({ children, tabs, defaultTab, onTabSelect, className, ...props }) {
    const { currentTab, setCurrentTab } = useTabs();

    useEffect(() => {
        setCurrentTab(defaultTab)
    }, [setCurrentTab, defaultTab])

    return (

        <div className={`tabs ${className}`} {...props} >
            <ul className="tabs-header">
                {Object.values(tabs).map((tabValue) => (
                    <li
                        onClick={() => setCurrentTab(tabValue)}
                        className={`${currentTab === tabValue ? 'active' : ''}`}
                        key={tabValue}
                        //onClick={() => onTabSelect(tabValue)}
                    > {tabValue} </li>
                ))}
            </ul>
            <div className="tabs-body">
                {
                    children &&
                    React.Children.map(children, (child) => {
                        if(child.type.name !== 'Tab') {
                            throw new Error('The child components should be of type Tab')
                        }
                        return child.props.id === currentTab ? child : null;
                    })
                }
            </div>
        </div>
    );
};

export const Tab = function({ children, ...props }) {
    return <section {...props}>{children}</section>
}
// const Tab = ({tabs}) => {
//     // const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
//     const [activeTab, setActiveTab] = useState()
//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };
//     return (
//         <div>
//             <ul className="tab-list">
//                 {tabs.map((tab, index) => (
//                     <li
//                         key={index}
//                         className={`tab-item ${activeTab === tab ? 'active' : ''}`}
//                         onClick={() => handleTabClick(tab)}
//                     >
//                         {tab}
//                     </li>
//                 ))}
//             </ul>
//             <div className="tab-content">
//                 <p>{`This is the content for ${activeTab}.`}</p>
//             </div>
//         </div>
//     )
// }
//
// export default Tab
