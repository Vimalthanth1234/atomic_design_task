import React from 'react'
import TopImg from './Section1Components/TopImg'
import Section1Heading from './Section1Components/Section1Heading'
import RightImgPost from './Section1Components/RightImgPost'
import LeftImg from './Section1Components/LeftComponent/LeftImg'
import LetfText from './Section1Components/LeftComponent/LetfText'
function Section1() {
    return (
        <section className="section about-me" data-section="section1">
                    <div className="container">
                        <TopImg />
                        <Section1Heading />
                        <RightImgPost />
                        <div className="left-image-post">
                            <div className="row">
                                <LeftImg />
                                <LetfText /> 
                            </div>
                        </div>
                    </div>
                </section>
    )
}
export default Section1