import React from 'react'
import contact from './contact.jpg'
function Contacts() {
  return (
    <div id='contact' style={{ height: '490px'}}>

      <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-xs-column">
        <div className="p-2 flex-fill d-none d-lg-block" style={{ backgroundImage: `url(${contact})`, backgroundRepeat: 'no-repeat, repeat', backgroundSize: 'cover' }}>

        </div>
        <div className="p-2 flex-fill" style={{ backgroundColor: '#1a1066', color: 'white' }}>
          <h2>FIND ME</h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-1 col-md-1 col-sm-1 col-1" data-toggle="tooltip" data-placement="bottom" title="Aagam Parekh"><a href="https://bit.ly/3bPb4yD"><i class="fa-brands fa-linkedin fa-4x text-primary"></i></a></div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 ">

                <form action="https://formsubmit.co/153d0e0283b9daac21bb9beb0ac2241c" method="POST">
                  <input type="hidden" name="_captcha" value="false" />
                  <div className="form-group my-2">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control m-1" name='Name' placeholder="Enter Name" />
                  </div>
                  <div className="form-group my-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control m-1" id="exampleInputEmail1" name='Email' aria-describedby="emailHelp" placeholder="Enter Email" />
                  </div>
                  <div className="form-group my-2">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea className="form-control m-1" id="exampleFormControlTextarea1" name='Message' placeholder="Message" rows="3"></textarea>
                  </div>
                  <input type="hidden" name="_template" value="table"></input>
                  <input type="hidden" name="_next" value="http://localhost:3000/#contact" />
                  <button type="submit" className="btn btn-success my-3">Send <i class="fa-regular fa-envelope"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
