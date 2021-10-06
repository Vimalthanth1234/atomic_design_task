import React from 'react'
import Logo from './Logo'
import Title from './Title'
import Navigation from './Navigation'
import SocialLinksFooter from './SocialLinksFooter'
import Copyright from './Copyright'
function Navbar() {
    return (
        <div className="responsive-nav">
            <i className="fa fa-bars" id="menu-toggle"></i>
            <div id="menu" className="menu">
                <i className="fa fa-times" id="menu-close"></i>
                <div className="container">
                    <Logo />
                    <Title />
                    <Navigation />
                    <SocialLinksFooter />
                    <Copyright />
                </div>
            </div>
        </div>
    )
}
export default Navbar