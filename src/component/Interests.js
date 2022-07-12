import React from 'react'
import cricket from './cricket.jpg'
import travel from './travel.jpg'
import learn from './learn.jpg'
import fitness from './fitness.jpg'
function Interests() {
  return (
    <div id='interests'>
      <h2>05 INTERESTS</h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div class="card mb-4" style={{ boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}  >
              <img src={cricket} class="card-img-top" alt="..." />
              <div class="card-body  p-3">
                <h5 class="card-title text-center mb-4">Sports</h5>
                <p class="card-text"> <hr />I love to play sports such as football, cricket, and badminton
                  among which cricket is my favourate. I am a huge fan of Sachin Tendulkar,
                  and MS. Dhoni watching them since my childhood. Sports are just part of my life!</p>

              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div class="card mb-4" style={{ boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}  >
              <img src={travel} class="card-img-top" alt="..." />
              <div class="card-body p-3">
                <h5 class="card-title text-center mb-4">Travelling</h5>
                <p class="card-text"> <hr />Traveling around the world is just a dream of mine.
                  I am a very adventurous person who likes to take the risk and want to experience and
                  meet many new people around the globe. Travelling makes me happy.</p>

              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div class="card mb-4" style={{ boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}  >
              <img src={learn} class="card-img-top" alt="..." />
              <div class="card-body  p-3">
                <h5 class="card-title text-center mb-4">Learning New Things</h5>
                <p class="card-text"> <hr />I have a passion for learning new things cause that's what helps me in growing. Learning a new language is a bit challenging but an outstanding experience one must-have. Currently, I am learning the German Language.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div class="card mb-4" style={{ boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}>
              <img src={fitness} class="card-img-top" alt="..." />
              <div class="card-body  p-3">
                <h5 class="card-title text-center mb-4">Fitness</h5>
                <p class="card-text"><hr />I have a great love for fitness. I am passionate about being fit and healthy. I love to do excerise and mediate regualaryly to keep my body in shape and to get positivity in life </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Interests
