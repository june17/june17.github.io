
import { useState } from 'react'

const tabData = [
    {
        'pros': 'Full pipeline - Lots of activity - therefore need follow-up reminders and way to organize contacts.',
        'cons': '',
        'url':['https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/persona1.png?alt=media&token=7fc3f9c5-7a88-4356-9325-52da7cb56145'],
        'id':1     
    },
    {
        'pros':'Empty pipeline - Little activity - therefore need reach-outs and consistent daily habits to kickstart a business. THEN will need of follow up',
        'cons':'',
        'url':['https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/persona2.png?alt=media&token=15eac3e1-5300-4690-9dd7-93b1cfefba28'],
        'id':2,
    }
]


var tab1 = 1
var tab2 = 0
var i = 0

const Onboarding = () => {
    const [active,setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
        }
    }
    return (
    <div className='container-fluid'>
        <div className='row doughBlue projectCaseStudyHeader'>
            <div className='container projectHeaderLayout1'>
                <div className='row'>
                    <div className='col-md-6'>
                            <h2>Aha! onboarding</h2>
                            <p>iOS, Android</p>
                            <div>
                                <p className='metaParagraph'>Client: Dough</p>
                                <p className='metaParagraph'>Timeline: Mar-Apr 2021</p>
                                <p className='metaParagraph'>Team: Althea Chia (Product), Darius Chia (Customer Relations), Arun (Design)</p>
                            </div>
                    </div>
                    <div className='col-md-6'>
                        <video width="100%" autoPlay loop >
                            <source src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dough-onboarding-hero-thumbnail.mp4?alt=media&token=5f01822d-d9b3-4fa7-a6ed-8214ae6e2d1c'} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
             <div className='col-12 projectHeaderLayout1SubSection'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-6 subColumn">
                                <h4>Summary</h4>
                                <p>
                                We redesigned the mobile app onboarding experience to provide an easy and frictionless path to find value for the users and in turn, convert them into a customer. This project was part of a series of design experiments we did to improve product activation. Throughout the onboarding flow, we tried to bring "Aha moments" periodically to make the journey of finding value exciting for the users.
                                </p>    
                            </div>
                            <div className="col-md-6 subColumn">
                                <h4>Contribution</h4>
                                <ul>
                                    <li><p>Ideated solutions for the given problem and presented them to stakeholders</p></li>
                                    <li><p>Created high fidelity prototypes, wireframes, UI design and animations</p></li>
                                    <li><p>Tested prototypes with the users</p></li>
                                    <li><p>Handoff to developers with specs and requirements checklist</p></li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='projectTextContent'>
             <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3> Background </h3>
                        <p>Dough is a relationship management tool available in Play Store and App Store for network marketers. It helps the users to track their customers, prospects, and team and know what to do each day. It is used by over 10000+ network marketers.  </p>
                        <h3>Identifying pain points in the existing onboarding</h3>
                        <p>
                        We mapped out the existing user journey right from the start, the app store till the user visits Tasks, Lists, Contacts, Systems screens inside the app. After that, we highlighted the things that are working well, things that can be improved, and the things that are causing friction. We used green, yellow and red cards to highlight them. It helped us gain insights on each screen. We also looked for inconsistent copies in the product. 
                        </p>
                        <h3>New strategy</h3>
                        <p>
                        The new strategy is based on the success stories of different startups that have successfully implemented the concept of aha! moments (‘17 Examples of Aha! Moments from Successful SaaS Companies’ 2019) and key onboarding milestones suggested by experts. The key milestones of onboarding include the moment of value perception, the moment of value realization and the moment of value adoption. 
Aha! moments are an emotional reaction when a user recognizes and discovers the value of a feature or a product. We have a short attention span, and the product must add value to the consumer within the time frame. We want fast results and would not waste time searching for what should be apparent in a product.
Based on this, we set out in search of our own aha! moment. We talked to customers to understand their moments of value perception and then we drew user personas with different tiers of features. At Dough, there is a feedback loop happening between the customer success team and the product team. The customer success team is the eyes and ears of customers and without a feedback loop, the product team will be building the platform blindly. Based on this qualitative data, we framed our target personas: 
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Personas and their core use cases </h3>
                        <div className='row row-cols-2 tabGroup'>
                            <div onClick={handleClick} id={0} className={`${active === 0 ? "active" : ""}`}>🌳 1. Successful business builder</div>
                            <div onClick={handleClick} id={1} className={`${active === 1 ? "active" : ""}`}>🌱 2. New or inactive business builder</div>
                        </div>
                        <div className='row'>
                             <div>
                                {tabData[active].url.map((image)=>(
                                    <img src={image} alt='no image' style={{'margin': '1rem 0', 'border': '1px solid #eaeaea', 'width': '100%'}} />
                                ))}
                            </div> 
                            <div className='col-md-12 '>
                                <h5>Characteristics</h5>
                                <p>{tabData[active].pros}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Aha moments</h3>
                        <p>We mapped out the experience for the first 30 seconds, then 30 minutes and 3 days. Dough aha moments within signup:</p>
                        <div className='row'>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/Aha_moments_within_signup%201.png?alt=media&token=e3c390a7-0743-4617-98fa-692f97ee9c77'} width='100%' style={{'margin': '3rem 0 5rem 0', 'border': '1px solid #eaeaea'}} alt='image'/>
                        </div>
                        <h3>Redesigning</h3>
                        <p>
                        The next step was to decide how to incorporate the changes into the existing product. As we were a very early stage startup, we were expecting early adopters and they are in general forgiving about changes in experimentation. So instead of incrementally sneak in the new design improvements, we decided to completely overhaul the experience.
                        </p>
                        <h3>Prototyping</h3>
                        <p>
                        We presented the new flow and the old flow to the users and refined them. We had tested the designs with five users. While finding the participants for user testing, we made sure that there were representations from the personas we were targeting. 
                        </p>
                        <div className='row' style={{'margin': '3rem 0 2.5rem 0'}}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dough-onboarding1.png?alt=media&token=20d1585b-7066-4e02-afb2-6a91a968afb3'} width='100%' style={{ 'border': '1px solid #eaeaea'}} alt='image'/>
                            <p style={{'textAlign':'center', 'width': '100%', 'fontSize':'13px'}}>Prototype: initial version</p>
                        </div>
                        <div className='row' style={{'margin': '3rem 0 5rem 0'}}>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dough-onboarding2.png?alt=media&token=a9e3201c-7432-41e8-a500-d5d7da8b13cf'} width='100%' style={{ 'border': '1px solid #eaeaea'}}  alt='image'/>
                            <p style={{'textAlign':'center', 'width': '100%', 'fontSize':'13px'}}>Prototype: final version</p>
                        </div>
                    </div>
                </div>    
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Final designs shipped</h3>
                        <p>
                            The existing onboarding flow was divided into 2 flows in the new onboarding design.
                        </p>
                        <h4>Step 1</h4>
                        <p style={{'marginBottom': '24px'}}>Collect basic contact information and verify their email address</p>
                        <div className='row'>
                            <div className='col-md-6' style={{'background':'#126275', 'minHeight':'720px', 'display': 'flex', 'alignItems': 'center'}}>
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dough-signup-form-1.png?alt=media&token=7669deb9-61d8-4aa9-bf6b-e67b6cff69ca'}  style={{'margin':'0 auto', 'maxWidth': '300px'}}/>    
                            </div> 
                            <div className='col-md-6' style={{'background':'#126275', 'minHeight':'720px', 'display': 'flex', 'alignItems': 'center'}}>   
                                <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dough-signup-form-2.png?alt=media&token=4e1fffd7-52df-4499-b65b-bb6982bc3fec'}  style={{'margin':'0 auto', 'maxWidth': '300px'}}/>   
                            </div> 
                        </div>

                        <h4 style={{'marginTop': '64px'}}>Step 2</h4>
                        <p style={{'marginBottom': '24px'}}>After the user verifies their email, take them to the second flow.</p>
                        <div className='row'>
                            <video width="100%" controls loop >
                                <source src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dough-onboarding.mp4?alt=media&token=3fcd7133-7bfd-4fc0-bd51-ea6999e24d85'} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Bibliography</h3>
                        <p>Outcome-Based Onboarding for Users vs Customers [online] (2021), <a href="https://www.reforge.com/brief/outcome-based-onboarding-for-users-vs-customers">Reforge</a> [accessed 16 Apr 2021].</p>
                        <p>Duncan, L. (2021) Understanding the ‘Aha’ Moments in Your Product [online], <a href="https://www.intercom.com/blog/understanding-your-aha-moments-and-putting-them-to-work/">Inside Intercom</a> [accessed 26 Apr 2021].</p>
                        <p>Agarwal, Pulkit. How the Aha Moment Unlocks Successful User Onboarding [online] (2021) <a href="https://www.trychameleon.com/blog/successful-user-onboarding ">Chameleon</a>[accessed 26 Apr 2021].</p>
                        <p>17 Examples of Aha! Moments from Successful SaaS Companies [online] (2019) <a href=" https://encharge.io/aha-moment-examples/">Encharge</a>[accessed 26 Apr 2021].</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

  export default Onboarding