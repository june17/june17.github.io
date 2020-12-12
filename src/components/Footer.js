import React from 'react'
import Instagram from '../img/instagram.svg'
import Twitter from '../img/twitter.svg'
import Linkedin from '../img/linkedin.svg'
import Skype from '../img/skype.svg'


function Footer() {
    const footerStyle = {
        margin: '5rem 0 4rem 0'
    }
    return (
        <div className='row justify-content-center' style={footerStyle}>
            <div className='row align-items-center'>
                <div className='col-2'>
                    <img src={Linkedin} alt="Linkedin" />
                </div>
                <div className='col-2 offset-1'>
                    <img src={Twitter} alt="Twitter" />
                </div>
                <div className='col-2 offset-1'>
                    <img src={Instagram} alt="Instagram" />
                </div>
                <div className='col-2 offset-1'>
                    <img src={Skype} alt="Skype" />
                </div>
            </div>
            <div className='col-12' style={{textAlign:'center', padding: '2rem 0 2rem 0', color: '#aaa'}}>
                Built with Figma & React 
            </div>
        </div>
    )
}

export default Footer