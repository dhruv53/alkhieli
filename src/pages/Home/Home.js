import React from 'react';
import Insights from './Components/Insights';
import InsightCard from './Components/InsightCard';
import HelpHeading from "./Components/HelpHeading";
function Home() {
    return (
        <div>
            <Insights/>                    {/*Heading*/}
            <InsightCard/>                 {/*Cards*/}
            <HelpHeading/>
        </div>
    )
}

export default Home
