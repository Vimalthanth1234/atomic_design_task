import React from 'react'
import Section2Heading from './ComponentsOfSection2/Section2Heading'
import ServiceItem1 from './ComponentsOfSection2/ServiceItem1'
function Section2() {
    return (
        <section className="section my-services" data-section="section2">
            <div className="container">
                <Section2Heading />
                <div className="row">
                    <ServiceItem1 cName='fa fa-area-chart' Heading='Top Performance' prea='Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna.'/>
                    <ServiceItem1 cName='fa fa-check-square-o' Heading='Trusted Service' pera='Etiam at porta nulla, et euismod enim. Nullam semper ipsum et dui scelerisque.'/>
                    <ServiceItem1 cName='fa fa-question-circle' Heading='Need Help?' pera='Phasellus orci leo, elementum ac risus id, euismod porta lorem. Quisque feugiat.'/>
                    <ServiceItem1 cName='fa fa-support' Heading='Quick Support' pera='Mauris eu est vitae erat condimentum pellentesque. Fusce vehicula nunc.'/> 
                </div>
            </div>
        </section>
    )
}
export default Section2