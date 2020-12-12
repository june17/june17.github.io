import FeaturedProjects from './FeaturedProjects'

const Work = () => (
    <div className='container' style={{'background': 'white'}}>
      <div className='portfolioHero row'>
        <div className="col-md-8 offset-md-1">
          <h1>I'm Arun, engineer and an<br></br> <span className="onClickText"> interaction designer.</span></h1>
          <p>I design products and codes things.</p>
        </div>
      </div>
      <FeaturedProjects />
    </div>
)

export default Work