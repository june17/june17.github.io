import {Link} from 'react-router-dom'

const ProjectsData = [
    {
        id: 1,
        title: 'Promohunt studio',
        about: 'Redesigning the core layout of a website builder for prolonged use and efficiency.',
        image: '',
        url:'/ph/studio',
    },
    {
        id: 2,
        title: 'Poser, a chrome extension',
        about: 'Intervention using machine learning and gamification to reduce sedentary behaviour in software professionals.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/widget-screen.mp4?alt=media&token=162137b9-0d92-4317-9661-b38f14d74e5c',
        url:'/sp/pose',
    },
    {
        id: 3,
        title: 'Defining student progress',
        about: 'How can student fill gaps in inid',
        image: '',
        url:'/sp/trainer',
    },
]

const SelectedProjects = () => (
    <div>
        {ProjectsData.map((project)=>(
            <Link to={`${project.url}`}> 
                <div key={project.id} className='selectedProject row'>
                    <div className='col-md-5'>
                        <video className='selectedProjectVideo' autoPlay loop >
                            <source src={project.image} type="video/mp4"/>
                        </video>
                    </div>
                    <div className='col-md-6 projectText'>
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.about}</p>
                        </div>
                        <div>
                            <a>Read the story</a>
                        </div>

                    </div>
                </div>
            </Link>
        ))}
    </div>
)

export default SelectedProjects