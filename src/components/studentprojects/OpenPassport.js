const OpenPassport = () => (
    <div className='container-fluid'>
        <div className='row greeny projectCaseStudyHeader'>
            <div className='container projectHeaderLayout1'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                            <h2>OpenPassport </h2>
                            <p> As a traveler, it's important to have a visa ready for your trips. A visa allows the person issued it to travel to a foreign country and there request entry into the alien country that issued it. Depending on that foreign country's legal system, the visa may also be the legal basis for staying in and/or exiting from that country. Visa requirements for a country varies according to the traveler’s passport. Some countries allows holders of certain passport to travel visa-free, or they provide visa-on-arrival. As a backpacker myself, I felt that if there is a website that would list the countries he/she can travel with his/her passport based on type of visa needed it will be helpful for a lot of people. Thats how openpassport is born.
Openpassport provides information about visa requirements and document checklist for all countries.</p>
                    </div>
                </div>
                 <div className='row'>
                     <div className='col-md-10 offset-md-1'>
                        <div className='row projectMetaInfo2'>
                            <div className='col-4'>
                                <h6>TIMELINE</h6>
                                <p>Mar-July 2020</p>
                            </div>
                            <div className='col-4'>
                                <h6>ROLE</h6>
                                <p>Code, design</p>
                            </div>
                            <div className='col-4'>
                                <h6>PLATFORM</h6>
                                <p>Web application</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               <div className='col-md-10 offset-md-1' style={{'marginBottom': '5rem'}}>
                    <video width="100%" autoPlay loop >
                        <source src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/openpassport.mp4?alt=media&token=86f3a2c6-3a49-43af-a041-90d3dfc0e674'} type="video/mp4"/>
                    </video> 
                    <h3 style={{'fontSize': '2rem', 'color': 'white', 'margin': '5rem 0 1rem 0'}}>Best time to visit a country</h3>
                    <img width='100%' src={'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/desktop-%20details.jpg?alt=media&token=9dd754f0-ed4e-4cc0-910e-58d3b42e17fe'} />
                    
                </div>
        </div>
        <div className='projectTextContent'>
            <div className='container'>
                 <div className='col-md-10 offset-md-1'>
                    <h3>Closing Notes</h3>
                    <p>This project was done during our freetime with one of my close friends. I saw this is an opportunity to master React.js. I coded the entire front end in React. My friend worked on the database and backend code. Due to shortage of time, we temporarily halted the 
                        development, but the site is live <a style={{'color':'#16411d', 'fontWeight':'500', 'textDecoration': 'underline'}} href='https://openpassport.co' target='_blank' >here</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default OpenPassport