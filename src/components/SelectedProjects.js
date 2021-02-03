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
    // {
    //     id: 2,
    //     title: 'Poser, a chrome extension',
    //     about: 'Intervention using machine learning and gamification to reduce sedentary behaviour in software professionals.',
    //     image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/widget-screen.mp4?alt=media&token=162137b9-0d92-4317-9661-b38f14d74e5c',
    //     url:'/sp/pose',
    //     backcolor: '#e8f4ff',
    // },
    {
        id: 4,
        title: 'Cashflow manager for LOC loans',
        about: 'Designing a new feature to the bank customer portal that allows a line of credit customer to take out money within their credit limit and repay it.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/cashflowthumbnail.mp4?alt=media&token=18cdc473-0739-4271-9a3e-5c10e77ca314',
        url:'/ds/cashflow',
        backcolor: '#e8f4ff'
    },
    {
        id: 3,
        title: 'OpenPassport',
        about: 'Making a website that provides information about visa requirements and document checklist for all countries.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/openpassportthumbnail.mp4?alt=media&token=fdf2dd4e-31a1-4607-9221-39f195a7b24a',
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