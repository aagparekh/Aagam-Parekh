import React from 'react'
import ProgressBar from './ProgressBar'
import skill from './skill.png'

const Skills = () => {
  return (
    <div>
      <div id='skills' style={{ backgroundImage: `url(${skill})`, backgroundRepeat: 'no-repeat, repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className='text-white m-0 pt-3'>04 SKILLS</h2>
        <div className="container col-lg-6 col-md-6 mt-3 pb-5">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Software Languages <i class="fa-brands fa-java fa-2x ms-2"></i>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ProgressBar value="Java" width="75%" />
                  <ProgressBar value="C++" width="60%" />
                  <ProgressBar value="C" width="55%" />
                  <ProgressBar value="Python" width="60%" />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Front-end Development <i class="fa-brands fa-react fa-2x ms-2"></i>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ProgressBar value="HTML/CSS" width="80%" />
                  <ProgressBar value="Javascript" width="80%" />
                  <ProgressBar value="AngularJs" width="75%" />
                  <ProgressBar value="ReactJs" width="82%" />
                  <ProgressBar value="JQuery" width="20%" />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Back-end Development <i class="fa-brands fa-node-js fa-2x ms-2"></i>
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ProgressBar value="PHP" width="30%" />
                  <ProgressBar value="NodeJs" width="65%" />
                  <ProgressBar value="Express" width="60%" />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Database <i class="fa-solid fa-server fa-2x ms-2"></i>
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ProgressBar value="MySQL" width="60%" />
                  <ProgressBar value="MongoDB" width="50%" />
                </div>
              </div>
            </div>
             
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Languages <i class="fa-solid fa-language fa-2x ms-2"></i>
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  <ProgressBar value="Hindi" width="90%" />
                  <ProgressBar value="Engish" width="90%" />
                  <ProgressBar value="Gujarati" width="40%" />
                  <ProgressBar value="German" width="30%" />
                  <ProgressBar value="Marathi" width="20%" />
                  <ProgressBar value="French" width="10%" />
                  
                </div>
              </div>
            </div> 
          </div>
          {/* <ProgressBar value="HTML/CSS" width="80%"/>
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
          <ProgressBar value="JQuery" width="20%"/> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
