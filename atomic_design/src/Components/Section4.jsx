import React from 'react'
import Section4Heading from './ComponentsOfSection4/Section4Heading'
import Form from './ComponentsOfSection4/Form'
function Section4() {
    return (
        <section className="section contact-me" data-section="section4">
                    <div className="container"> 
                        <Section4Heading />
                        <div className="row">
                            <div className="right-content">
                                <div className="container">
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}
export default Section4