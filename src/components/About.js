const About = () => (
  <div className='container'>
    <div className='row about'>
      <div className='col-md-10 offset-md-1'>
            <h3>Hello.</h3>
        <div className='row'>
          <div className='col-5' style={{'marginTop': '1rem'}}> 
            <p>I am Arun, a product designer and engineer from India. I was born and brought in the southern part of the beautiful country of India.I like to make digital experiences easier and simpler for people. I have worked with multiple teams in roles of design, engineering, product and marketing. </p>
            <p>I am passionate about researching problems and solving them through design while providing a pleasant user experiences.</p>
            
            <h6 style={{'marginTop': '1rem'}}>Location</h6>
            <p>Limerick, Ireland</p>
          </div>
          <div className='col-5 offset-md-1'> 
            <h6>Skills</h6>
            <p>Interaction design, Visual Design, Frontend web development in Javascript, React, HTML/CSS, ml5.js, Three.js, D3.js </p> 
            <br />
            <p>Adobe After Effects, Figma, Sketch, Adobe Illustrator, Adobe Indesign, Cinema4D</p> 
            <br />
            <p>I like to learn/unlearn tools and strategies and I strive to be better at creating beautiful, functional digital products.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About