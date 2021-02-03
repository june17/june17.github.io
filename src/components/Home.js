import SelectedProjects from './SelectedProjects'
import DribbbleShots from './DribbbleShots'

const Home = () => (
    <div className='container' style={{'background': 'white'}}>
      <div className='portfolioHero row'>
        <div className="col-md-8 ">
          <h1>I'm Arun, engineer and an <span>interaction designer</span></h1>
          <p>I design products and write code.</p>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-12">
            <h5>Selected case studies</h5>
            <div>
                <SelectedProjects />
            </div>
        </div>
      </div>
      <div className='row' style={{'marginTop': '48px'}}>
        <div className="col-md-12">
            <h5>Shots from other works</h5>
            <div className='row'>
                <DribbbleShots />
            </div>
        </div>
      </div>
    </div>
)

export default Home