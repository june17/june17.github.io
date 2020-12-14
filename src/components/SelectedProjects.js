import {Link} from 'react-router-dom'

const ProjectsData = [
    {
        id: 1,
        title: 'Promohunt studio',
        about: 'Redesigning the core layout of a website builder for prolonged use and efficiency.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/promohunteditor.mp4?alt=media&token=27262410-6d31-4362-b285-c807439daaef',
        url:'/ph/studio',
        backcolor: '#fdecec',
    },
    {
        id: 2,
        title: 'Poser, a chrome extension',
        about: 'Intervention using machine learning and gamification to reduce sedentary behaviour in software professionals.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/widget-screen.mp4?alt=media&token=162137b9-0d92-4317-9661-b38f14d74e5c',
        url:'/sp/pose',
        backcolor: '#e8f4ff',
    },
    {
        id: 3,
        title: 'OpenPassport',
        about: 'A website that provides information about visa requirements and document checklist for all countries.',
        image: '',
        url:'/sp/openpassport',
        backcolor: '#edffed'
    },
]

const SelectedProjects = () => (
    <div>
        {ProjectsData.map((project)=>(
            <Link to={`${project.url}`}> 
                <div key={project.id} className='selectedProject row' style={{backgroundColor: `${project.backcolor}`}}>
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