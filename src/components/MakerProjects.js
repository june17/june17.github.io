import {Link} from 'react-router-dom'

const MakerData = [

    {
        id: 1,
        title: 'Persona based Figma content generator',
        about: 'A figma plugin that generates cover page and UX copy',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/openpassportthumbnail.mp4?alt=media&token=fdf2dd4e-31a1-4607-9221-39f195a7b24a',
        url:'/sp/openpassport',
        backcolor: '#FFF9EA'
    },
    {
        id: 2,
        title: 'OpenPassport',
        about: 'Making a website that provides information about visa requirements and document checklist for all countries.',
        image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-40aa5.appspot.com/o/openpassportthumbnail.mp4?alt=media&token=fdf2dd4e-31a1-4607-9221-39f195a7b24a',
        url:'/sp/openpassport',
        backcolor: '#edffed'
    }
]

const MakerProjects = () => (
    <div>
    {MakerData.map((project)=>(
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

export default MakerProjects