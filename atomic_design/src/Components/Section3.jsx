import React from 'react'
import Section3Heading from './ComponentsOfSection3/Section3Heading'
import FormOfSection3 from './ComponentsOfSection3/FormOfSection3'
import IsotopeItem1 from './ComponentsOfSection3/IsotopeItem1'
function Section3() {
    return (
        <section className="section my-work" data-section="section3">
                    <div className="container">
                        <Section3Heading />
                        <div className="row">
                            <div className="isotope-wrapper">
                            <FormOfSection3 />
                                <div className="isotope-box">
                                    <IsotopeItem1 imgLink ='assets/images/woman-beach.jpg' aHref ='assets/images/woman-beach.jpg' dataType = 'beach' dataTitle='Caption' Heading = 'Girl One' pera='woman at the beach'/>
                                    <IsotopeItem1 imgLink ="assets/images/woman-chair-sunshine.jpg" aHref ="assets/images/woman-chair-sunshine.jpg" dataType ='two' dataTitle="Sunshine Woman" Heading = 'Girl Two' pera='there you go girl'/>
                                    <IsotopeItem1 imgLink ="assets/images/woman-pretty.jpg" aHref ="assets/images/woman-pretty.jpg" dataType ="pretty" dataTitle="Pretty Girl" Heading = 'Girl Three' pera='red flowers white girl'/>
                                    <IsotopeItem1 imgLink ="assets/images/escalator-blue.jpg" aHref ="assets/images/escalator-blue.jpg" dataType ="pretty" dataTitle="Escalator Blue" Heading = 'Escalator Up' pera='Blue architecture building'/>
                                    <IsotopeItem1 imgLink ="assets/images/woman-feeling.jpg" aHref ="assets/images/woman-bikini.jpg" dataType ="beach" dataTitle="Her Feeling" Heading = 'Her Feeling' pera='Ut sollicitudin risus'/>
                                    <IsotopeItem1 imgLink ="assets/images/woman-bikini.jpg" aHref ="assets/images/woman-feeling.jpg" dataType ="Girl Five" dataTitle="Girl Five" Heading = 'Girl Five' pera='Donec eget massa ante'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}
export default Section3