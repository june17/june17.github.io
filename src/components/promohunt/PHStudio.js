import { useState } from 'react'

const tabData = [
    {
        'pros': 'In this layout, users will be at presentation details page by default. Presentation details can be accessed from the first list item on the left side bar. Share options are within a dropdown in the top navigation bar. Order of components in the left sidebar is consistent with the layout of the Presentation.',
        'cons': 'However, this layout is not allowing easy switch to preview. Placement of cover photo interferes  with the proposed tool-bar for each product. Field visibility controls are inside the product details page.',
        'url':['https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/concept1.png?alt=media&token=9827093a-6317-4fb2-a0e1-4a0a94205d94'],
        'id':1     
    },
    {
        'pros':'The presentation details are separated from field-visibility settings. They are accessed using different links above the product listing.',
        'cons':'With this layout, the first product will be open by default. This might cause ambiguity. In the visual hierarchy, the product details is not given the right positioning.',
        'url':['https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/concept%202.png?alt=media&token=ef57e4f5-3528-4106-b366-3c566d55c4c3'],
        'id':2,
    },
    {
        'pros':'With this layout, the usability of "Preview & Share" improved compared to concept 1 and 2. The design was scalable and supports future feature additions.',
        'cons':'However, there was a mismatch in the ordering of components in the presentation-details-edit page and the presentation page. ',
        'url': [
            'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/concept%203.png?alt=media&token=d131e0a4-2f45-4e2e-861a-676dd1a109df',
            'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/concept3-2.png?alt=media&token=7cde0b78-1721-41bf-aeb6-768fa23cbeed',
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
                            <h2>Promohunt Studio Redesign </h2>
                            <p>Web Application</p>
                            <div>
                                <p className='metaParagraph'>Client: Promohunt</p>
                                <p className='metaParagraph'>Timeline: Sep-Nov 2020</p>
                                <p className='metaParagraph'>Team: Manish Chiniwalar (PM),  Arun (UX,UI)</p>
                            </div>
                    </div>
                    <div className='col-md-6'>
                        <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/promohuntStdio.png?alt=media&token=5cbb2da9-7d73-44ca-8f1b-a6b8e2659755'} width='100%'/>
                    </div>
                </div>
            </div>
             <div className='col-12 projectHeaderLayout1SubSection'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-6 subColumn">
                                <h4>Summary</h4>
                                <p>
                                    In this project, I redesigned the core layout of the Presentation Editor for prolonged use and efficiency. Throughout the process, I was careful to balance usability, business, and technical goals. The design was then validated by multiple users in by interviews conducted before the release of the redesign to the public
                                </p>    
                            </div>
                            <div className="col-md-6 subColumn">
                                <h4>Contribution</h4>
                                <ul>
                                    <li><p>Ideated solutions for the given problem and presented them to stakeholders</p></li>
                                    <li><p>Created high fidelity prototypes, wireframes, and design specification</p></li>
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
                        <p>Promohunt is a tool that automatically displays helpful information to distributors when they visit supplier websites. Promohunt Presentations is a feature that would allow promotional product distributors and suppliers to curate promotional products and share it with their prospective customers. Users can add products to the presentation using a form or through Promohunt's  chrome extension. The browser extension also shows helpful information to distributors when they visit supplier websites.</p>
                    </div>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Problems with the existing layout</h3>
                        <p>
                            Distributors today are taken to the Product List page. After making edits, intuitively, people visit the preview - which is good.
                            But they do not realise how to edit General information and toggle certain field's visibility.
                            We want to make the following intuitive and discoverable:
                            <ul>
                                <li>Editing Presentations Title & Description</li>
                                <li>Uploading a background Image. (All actions: add, replace, remove)</li>
                                <li>Toggle various fields</li>
                                <li>Add their email, phone, logo and profile picture. This is done once in the profile screen.</li>
                                <li>Toggle the email & phone for this presentation</li>
                                <li>Clearly communicate what the Presentation settings mean (Unlisted, Private, Community). Most people are not reading the subitles. And even after reading, they do not understand things like "community" as they do not know it exists.</li>
                                <li>We also need to make sure saving the settings is also intuitive.</li>
                            </ul>
                        </p>
                        <div className='row'>
                            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/ph-problems.png?alt=media&token=a41bf80f-f26a-487b-a2d4-1f428ce8c4b4'} width='100%' style={{'margin': '3rem 0 5rem 0', 'border': '1px solid #eaeaea'}} alt='image'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row blacky'>
                    <div className='col-md-8 offset-md-2 padding8v'>
                        <h3>Design challenge</h3>
                        <p>How can we redesign the layout of the Presentation Editor for maximum efficiency and prolonged use?</p>
                    </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <h3>Diverge </h3>
                        <div className='row row-cols-3 tabGroup'>
                            <div onClick={handleClick} id={0} className={`${active === 0 ? "active" : ""}`}>Concept 1</div>
                            <div onClick={handleClick} id={1} className={`${active === 1 ? "active" : ""}`}>Concept 2</div>
                            <div onClick={handleClick} id={2} className={`${active === 2 ? "active" : ""}`}>Concept 3</div>
                        </div>
                        <div className='row'>
                             <div>
                                {tabData[active].url.map((image)=>(
                                    <img src={image} alt='no image' style={{'margin': '1rem 0', 'border': '1px solid #eaeaea', 'width': '100%'}} />
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
                        <h3>Converge: Developing concept 3</h3>
                        <p>After comparing the pros and cons of the three concepts, we decided to go with the concept 3 as this concept was able to overcome most of the problems with the existing design.</p>
                    </div>
                </div>
            </div>
        
                              
            <div className='row blacky'>
                <div className='col-md-8 offset-md-2 padding8v'>
                    <video width="100%" autoPlay loop >
                        <source src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/promohunteditorLarge.mp4?alt=media&token=d3160cf4-9d00-4b90-83d7-78cb66157801'} type="video/mp4"/>
                    </video>
                </div>
            </div>
             <div className='container'>
                 <div className='col-md-10 offset-md-1'>
                    <h3>Closing Notes</h3>
                    <p>With the redesign we were able to tackle most of the issues with the earlier layout.
                        However, by analysing the usage patterns we found that many users still forget to save the changes. So we had to make further changes. 
                    </p>
                </div>
            </div>
        </div>

    </div>
    )
}

export default PHStudio