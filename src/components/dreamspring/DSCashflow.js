import { useState } from 'react'

const tabData = [
    {
        'pros': 'With this layout, the Request disbursement button is placed within the loan info container. Information about current credit usage is shown in the first viewport. Current disbursement request is shown within the loan info container, so no changes have to be made to the rest of the page.',
        'cons': `Current credit usage information is not clear. If there are multiple disbursement requests, it won't be easy to accommodate the data inside the loan info container.`,
        'url':['https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/cashflow-type%201.mp4?alt=media&token=3b1ccbe6-a3b2-4aca-a7ad-01350498d46e'],
        'id':1     
    },
    {
        'pros':`With this layout, the credit usage information is more apparent. Active loan disbursement requests are shown within the transaction history, so showing multiple request information won't be a problem.`,
        'cons':'Comparatively, more developer effort needed.',
        'url':['https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/cashflow-type%202.mp4?alt=media&token=51dcb3ff-a036-4c74-9a02-8e907851d553'],
        'id':2,
    },
    {
        'pros':'Added a new section without modifying any of the existing screens, so less developer effort needed.',
        'cons':'Credit usage information is not clear. In desktop, the right sidebar is overflowing. Loan disbursement requests can be accommodated on the right sidebar.',
        'url': [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/cashflow-type%203.mp4?alt=media&token=50f9264f-a3a5-4d21-a6d3-97e38545f6c7',
            ],
        'id':3
    }
]

var tab1 = 1
var tab2 = 0
var tab3 = 0
var i = 0


const PHStudio = () => {

    const [active,setActive] = useState(0);
    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
        setActive(index);
        }
    }
    return (
    <div className='container-fluid'>
     <div className='row blacky projectCaseStudyHeader'>
            <div className='container projectHeaderLayout1'>
                <div className='row'>
                    <div className='col-md-6'>
                            <h2>Cashflow manager for Line of Credit loans </h2>
                            <p>Web Application</p>
                            <div>
                                <p className='metaParagraph'>Client: DreamSpring</p>
                                <p className='metaParagraph'>Timeline: Sep-Nov 2020</p>
                                <p className='metaParagraph'>Team: Evan Maxon (PM), Gwen Bonilla (Loan expert), Arun (UX,UI)</p>
                            </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/cashflowmockup.png?alt=media&token=18294d49-8be6-4f31-8849-f2275cc35f80'} width='100%'/>
                    </div>
                </div>
            </div>
             <div className='col-12 projectHeaderLayout1SubSection'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-6 subColumn">
                                <h4>Summary</h4>
                                <p>
                                    In this project, I designed the Cashflow manager tool for LOC loans. The Cashflow manager allows the user to take out money within their limit and repay it. They can reuse the funds after repayment without having to reapply. 
                                </p>    
                            </div>
                            <div className="col-md-6 subColumn">
                                <h4>Contribution</h4>
                                <p>Worked with the Product Manager, Lending team and the Engineering Manager to redesign the client portal and the internal loan servicing software to design a friendly and transparent LOC lending experience with minimal dev efforts to ship the product within the tight deadline.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='projectTextContent'>
             <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Background</h3>
                        <p>
                            DreamSpring has initially been focussed on Term Loans, and we decided to offer a LOC product. A business Line of Credit (LOC) works like a credit card. LOC is a preset borrowing limit that can be used at any time. The borrower can take money out as needed until the limit is reached, and as money is repaid, it can be borrowed again. For implementing such a system, we have to have a system where the customer can make disbursement requests, repay the loans and a method for the internal loan processing team to handle requests. 
                        </p>
                        <p>
                            With this case study, I would like to discuss only the customer-facing aspects of the product, i.e., Cashflow Manager, due to the nature of work.
                        </p>
                    </div>

                    <div className='col-md-10 offset-md-1'>
                        <h3> Defining scope  </h3>
                        <p>
                           We started the project by defining its scope. The behaviour of LOC is quite different from other term loans we offered. Ideally, for integrating LOC product to our portfolio, we had to make changes to our loan application, loan processing and loan servicing software. But making changes to each will extend the timeline of development. So we had to smartly plan the scope so that we can provide a great user experience to the customers with minimal dev effort and meet the deadline.
                        </p>
                        <div className='row'>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dscashflow.png?alt=media&token=8d5c6122-6645-4464-84b9-6701d95190f7'} width='100%' style={{'margin': '3rem 0 5rem 0', 'border': '1px solid #eaeaea'}} alt='image'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row blacky'>
                    <div className='col-md-8 offset-md-2 padding8v'>
                        <h3>Design challenge</h3>
                        <p>Design a cashflow manager for LOC approved customers, that would help them streamline their cash flow and have access to capital without having to apply for a new loan.</p>
                    </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3> Identifying scenarios </h3>
                        <p>
                            We ideated different possible scenarios for the cashflow manager. Based on the scenarios discovered, we concluded that the most suitable location for the Cashflow manager is within the loan details page in the customer portal.
                        <ul>
                            <li>Loan within credit limit and new disbursements can be requested up to the available credit limit. When requesting a bank account from the list of available ones also has to be chosen.</li>
                            <li>Disbursement credit limit exceeded, need a lower amount.</li>
                            <li>Multiple disbursements are requested, and the total of those exceeds the credit limit.</li>
                            <li>Notice indicating request for new disbursement submitted.</li>
                            <li>Display requested but unprocessed disbursements.</li>
                            <li>Disbursement request initiated on a non-working day, so an indicator that the disbursement will only be processed on the next working day.</li>
                        </ul> 
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Diverge </h3>
                        <p>We came up with three concepts. In the videos below, grayed out containers are the new additions.</p>
                        <div className='row row-cols-3 tabGroup' style={{'marginTop': '32px '}}>
                            <div onClick={handleClick} id={0} className={`${active === 0 ? "active" : ""}`}>Concept 1</div>
                            <div onClick={handleClick} id={1} className={`${active === 1 ? "active" : ""}`}>Concept 2</div>
                            <div onClick={handleClick} id={2} className={`${active === 2 ? "active" : ""}`}>Concept 3</div>
                        </div>
                        <div className='row'>
                                <div style={{'width': '100%','minHeight': '500px', 'marginBottom':'32px'}}>
                                    {tabData[active].url.map((image)=>(
                                        <video key={tabData[active].id} width="100%" loop controls>
                                            <source src={image} type="video/mp4"/>
                                        </video> 
                                    ))}
                                </div> 
                            <div className='col-md-6 '>
                                <h5>Pros</h5>
                                <p>{tabData[active].pros}</p>
                            </div>
                            <div className='col-md-6'>
                                <h5>Cons</h5>
                                <p>{tabData[active].cons}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row' style={{'marginBottom':'5rem'}}>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Converge: Developing concept 2</h3>
                        <p>After comparing the pros and cons of the three concepts, we decided to go with the concept 2 as this concept provides the clear and unambiguous user experience.</p>
                    </div>
                </div>
            </div>
        
                              
            <div className='row blacky'>
                <div className='col-md-8 offset-md-2 padding8v'>
                    <video width="100%" autoPlay loop >
                        <source src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/dscashflow.mp4?alt=media&token=4b377f42-084c-40e0-b0fc-ea9340ff88c5'} type="video/mp4"/>
                    </video>
                </div>
            </div>
             {/* <div className='container'>
                 <div className='col-md-10 offset-md-1'>
                    <h3>Closing Notes</h3>
                    <p>With the redesign we were able to tackle most of the issues with the earlier layout.
                        However, by analysing the usage patterns we found that many users still forget to save the changes. So we had to make further changes. 
                    </p>
                </div>
            </div> */}
        </div>

    </div>
    )
}

export default PHStudio