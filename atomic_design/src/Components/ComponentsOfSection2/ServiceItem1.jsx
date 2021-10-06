import React from 'react'
function ServiceItem1(props) {
    return (
        <div className="col-md-6">
            <div className="service-item">
                <i className={props.cName}></i>
                <h4>{props.Heading}</h4>
                <p>{props.pera}</p>
            </div>
        </div>
    )
}
export default ServiceItem1