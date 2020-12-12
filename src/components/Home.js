import SelectedProject from './SelectedProject'

const Home = () => (
    <div className='container' style={{'background': 'white'}}>
      <div className='portfolioHero row'>
        <div className="col-md-8 offset-md-1">
          <h1>I'm Arun, engineer and an<br></br> <span className="onClickText"> interaction designer.</span></h1>
          <p>I design products and codes things.</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-8 offset-md-1">
            <div>
                <SelectedProject />
            </div>
        </div>
      </div>
    </div>
)

export default Home