import SelectedProjects from './SelectedProjects'

const Home = () => (
    <div className='container' style={{'background': 'white'}}>
      <div className='portfolioHero row'>
        <div className="col-md-8 ">
          <h1>I'm Arun, engineer and an <span>interaction designer</span></h1>
          <p>I design products and codes things.</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-12">
            <h5>Recent Works</h5>
            <div>
                <SelectedProjects />
            </div>
        </div>
      </div>
    </div>
)

export default Home