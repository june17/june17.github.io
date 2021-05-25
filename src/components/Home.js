import SelectedProjects from './SelectedProjects'
import DribbbleShots from './DribbbleShots'
import MakerProjects from './MakerProjects'

const Home = () => (
    <div className='container' style={{'background': 'white'}}>
      <div className='portfolioHero row'>
        <div className="col-md-8 ">
          <h1>For the love of learning, creating and experiencing</h1>
          <p>Interaction and experience designer</p>
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
      <div className='row' style={{'marginTop': '8rem'}}>
        <div className="col-md-12">
            <h5>Side projects</h5>
            <div>
                <MakerProjects />
            </div>
        </div>
      </div>
      <div className='row' style={{'marginTop': '72px'}}>
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