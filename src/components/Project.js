import {Link} from 'react-router-dom'

const Project = (props) => {  
    return(
        <div className='row projectItem'>
            <div className="col-12">
                <div className="row">
                    <div className="col-md-11 projectItemInfoBlock">
                        <p>{props.data.timeframe}</p>
                        <h3>{props.data.title}</h3>
                        <p>{props.data.description}</p>
                    </div>
                </div>
                <div className="row">
                    {props.data.projects.map((project) => ( 
                        //<Link to={`${project.url}`} key={project.id}> 
                            <div className='col-md-6 subProject' >
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                            </div>
                    // </Link>
                    ))} 
                </div>
            </div>
        </div>
    )
}

export default Project