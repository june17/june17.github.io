import React from 'react'
import Instagram from '../img/instagram.svg'
import Twitter from '../img/twitter.svg'
import Linkedin from '../img/linkedin.svg'
import Skype from '../img/skype.svg'
import Dribbble from '../img/dribble.svg'


function Footer() {
    const footerStyle = {
        margin: '20rem 0 4rem 0'
    }
    return (
        <div className='row justify-content-center' style={footerStyle}>
            <div className='row align-items-center'>
                <div className='col-2'>
                    <a href='https://dribbble.com/arnrj' target='_blank'>
                        <img src={Dribbble} alt="Dribbble" width="32" />
                    </a>
                </div>
                <div className='col-2'>
                    <a href='https://www.linkedin.com/in/arnrj/' target='_blank'>
                        <img src={Linkedin} alt="Linkedin"  width="32" />
                    </a>
                </div>
                <div className='col-2'>
                    <a href='https://twitter.com/arunraajj/' target='_blank'>
                        <img src={Twitter} alt="Twitter" width="32"  />
                    </a>
                </div>
                <div className='col-2'>
                    <a href='https://www.instagram.com/arunraajj' target='_blank'>
                        <img src={Instagram} alt="Instagram" width="32"  />
                    </a>
                </div>
                <div className='col-2'>
                    <a href='https://join.skype.com/invite/LT7MhTVsfsD2' target='_blank'>
                        <img src={Skype} alt="Skype" width="32"  />
                    </a>
                </div>
            </div>
            <div className='col-12' style={{textAlign:'center', padding: '2rem 0 2rem 0', color: '#aaa'}}>
        
            </div>
        </div>
    )
}

export default Footer