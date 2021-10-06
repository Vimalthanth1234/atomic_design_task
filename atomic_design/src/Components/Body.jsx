import React from 'react'
import Navbar from './Navbar/Navbar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
function Body() {
    return (
        <div>
            <div id="page-wraper">
                <Navbar />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 /> 
            </div>
        </div>
    )
}
export default Body