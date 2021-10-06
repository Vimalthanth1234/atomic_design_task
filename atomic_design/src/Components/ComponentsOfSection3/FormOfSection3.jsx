import React from 'react'

function FormOfSection3() {
    return (
        <form className="isotope-toolbar">
            <label><input type="radio" data-type="*" checked="" name="isotope-filter" />
                <span>all</span></label>
            <label><input type="radio" data-type="pretty" name="isotope-filter" />
                <span>pretty</span></label>
            <label><input type="radio" data-type="sexy" name="isotope-filter" />
                <span>sexy</span></label>
            <label><input type="radio" data-type="beach" name="isotope-filter" />
                <span>beach</span></label>
        </form>
    )
}
export default FormOfSection3