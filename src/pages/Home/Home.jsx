import React from 'react';
import Insights from './Components/Insights';
import InsightCard from './Components/InsightCard';
import HelpHeading from "./Components/HelpHeading";
import SideMenu from './Components/SideMenu';
import Contact from './Components/Contact';
import Header from './Components/Header';
function Home() {
    return (
        <div>
            <Header/>
            <Insights/>                    {/*Heading*/}
            <InsightCard/>                 {/*Cards*/}
            <HelpHeading/>
            <Contact/>
            <SideMenu/>
        </div>
    )
}

export default Home
