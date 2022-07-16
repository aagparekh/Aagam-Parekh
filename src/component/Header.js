import React from 'react'
import tunnel from './tunnel.jpg'
function Header() {
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '600px',backgroundImage: `url(${tunnel})`, backgroundRepeat: 'no-repeat, repeat', backgroundSize: 'cover',backgroundPosition: 'center' }}>
            <div style={{ height: '250px', width: '250px', color: 'black'}}>
              <h1 style={{letterSpacing: '3.5px'}} className='text-white fw-bolder'> I'M<br/>AAGAM<br/>PAREKH.</h1>
              <p className='text-white fw-semibold'>Student & Aspiring </p>
              <div data-toggle="tooltip" data-placement="bottom" title="Aagam Parekh"><a href="https://bit.ly/3bPb4yD"><i class="fa-brands fa-linkedin fa-3x"></i></a>
              <a href="https://bit.ly/3AFymBc"><i class="fa-brands fa-hackerrank fa-3x text-success mx-4"></i></a>
              <a href="https://github.com/aagparekh"><i class="fa-brands fa-github fa-3x"></i></a>
              </div>
              {/* <button type="button" class="btn btn-sm btn-outline-light col-lg-9 mt-3 fw-bolder">Get Resume</button> */}
              <a class="btn btn-sm btn-outline-light col-lg-9 mt-3 fw-bolder" href="https://bit.ly/3OdbdJu" role="button">Get Resume</a>
            </div>
        </div>
    )
}

export default Header
