import React from 'react'
import code from './code.jpg'
import team from './team.jpg'
import inotebook from './inotebook.jpg'
function About() {
  return (
    <div id='about'>
      <h2>01 ABOUT ME</h2>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div class="card mb-3" style={{ maxwidth: "540px", boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}>
              <div class="row g-0">
                <div class="col-md-5 d-flex justify-content-center p-2">
                  <img src={inotebook} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title text-center p-2">Full Stack Web Developer <hr /> </h5>
                    <p class="card-text pb-4">Well still a beginner with no prior experince but have built few live websites based on <b> MERN stack and MEAN stack</b>. I have listed few of it in the below section. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div class="card mb-3" style={{ maxwidth: "540px", boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}>
              <div class="row g-0">
                <div class="col-md-5 d-flex justify-content-center p-2">
                  <img src={team} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title text-center p-2">Teamwork <hr /> </h5>
                    <p class="card-text">I greatly believe that to have a significant impact, one must work in a team. I have worked on many team projects and led most of them to the top.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div class="card mb-3" style={{ maxwidth: "540px", boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}>
              <div class="row g-0">
                <div class="col-md-5 d-flex justify-content-center p-2">
                  <img src={code} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title text-center p-2">Language Proficiency <hr /> </h5>
                    <p class="card-text">As a computer engineer, I am proficient in various languages such as <b>java, python, C, and C++</b>, among which java and python are my favorite language. Over the period, I coded a few projects in these languages. </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
