import React from 'react'

function IsotopeItem1(props) {
    return (
        <div className="isotope-item" data-type={props.dataType}>
            <figure className="snip1321">
                <img src={props.imgLink} alt="woman at the beach" />
                <figcaption>
                    <a href={props.aHref}
                        data-lightbox="image-1"
                        data-title={props.dataTitle}><i className="fa fa-search"></i></a>
                    <h4>{props.Heading}</h4>
                    <span>{props.pera}</span>
                </figcaption>
            </figure>
        </div>
    )
}
export default IsotopeItem1