import React from 'react'
import './heading.css'
import sju from './sju.jpg'
import mpstme from './mpstme.png'
import mpstmeback from './mpstmeback.jpg'
const Education = () => {
  return (
      <div id='education' style={{backgroundImage: `url(${mpstmeback})`,backgroundRepeat: 'no-repeat, repeat', backgroundSize: 'cover'}}>
      <h2 className='text-white m-0 mb-3 pt-3'> 02 EDUCATION</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card card-sm mb-3 mt-3 mx-auto" style={{maxWidth: '600px'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={sju} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body" >
                    <h5 className="card-title"><strong>St. John's Universal School</strong></h5>
                    <p className="card-text m-0"><small><b>10<sup>th</sup>  ICSE - 2019</b></small></p>
                    <p className="card-text text-muted fst-italic">Ranked 12th in the school</p>
                    <p className="card-text"><b>92.6%</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card card-sm mb-3 mx-auto" style={{maxWidth: '600px'}}>
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img src={mpstme} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"><strong>Mukesh Patel School of Technology Management And Engineering</strong></h5>
                    <p className="card-text"><small><b>2019 - Present</b></small></p>
                    <p className="card-text"><b> Current CGPA 3.83</b></p>
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

export default Education
