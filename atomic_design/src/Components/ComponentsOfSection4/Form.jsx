import React from 'react'
import Field1 from './ComponentsOfForm/Field1'
import Field2 from './ComponentsOfForm/Field2'
import Field3 from './ComponentsOfForm/Field3'
import Field4 from './ComponentsOfForm/Field4'
import Field5 from './ComponentsOfForm/Field5'

function Form() {
    return (
        <form id="contact" action="" method="post">
            <div className="row">
                <Field1 />
                <Field2 />
                <Field3 />
                <Field4 />
                <Field5 />
            </div>
        </form>
    )
}
export default Form