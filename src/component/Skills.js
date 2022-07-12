import React from 'react'
import ProgressBar from './ProgressBar'
import skill from './skill.png'

const Skills = () => {
  return (
    <div>
      <div id='skills' style={{ height: '680px',backgroundImage: `url(${skill})`, backgroundRepeat: 'no-repeat, repeat', backgroundSize: 'cover',backgroundPosition:'center' }}>
        <h2 className='text-white m-0 pt-3'>04 SKILLS</h2>
        <div className="container col-lg-6 col-md-6 mt-5">
          <ProgressBar value="HTML/CSS" width="80%"/>
          <ProgressBar value="Java" width="75%"/>
          <ProgressBar value="C++" width="60%"/>
          <ProgressBar value="C" width="55%"/>
          <ProgressBar value="Python" width="60%"/>
          <ProgressBar value="Javascript" width="80%"/>
          <ProgressBar value="AngularJs" width="75%"/>
          <ProgressBar value="ReactJs" width="82%"/>
          <ProgressBar value="SQL" width="60%"/>
          <ProgressBar value="MongoDB" width="50%"/>
          <ProgressBar value="PHP" width="30%"/>
          <ProgressBar value="JQuery" width="20%"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
