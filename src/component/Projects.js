import React, { useState } from 'react'
import education from './education.jpg'
import slice from './slice.jpg'
import apscamp from './apscamp.jpg'
import inotebook from './inotebook.jpg'
import hospital from './hospital.jpg'
import './Projects.css';
import ProjectDrawer from "./ProjectDrawer";


function Projects() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div id='projects'>
      <h2> 03 PROJECTS</h2>
      <div className="container my-4">
        <div className="row justify-content-center">

          <div class="card custom-card col-lg-3 me-3" id='frontend' onClick={() => handleCardClick("Frontend")} style={{ background: "linear-gradient(135deg, #ffecd2, #fcb69f)" }}>
            <div class="card-body">
              <h5 class="card-category" style={{color: "#ff5722"}}>Frontend Works</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Sleek UI. Solid UX.</h6>
              <p class="card-text">Building intuitive, responsive, and visually polished interfaces.</p>

              <div class="card-stats">
                ✨ 3 Projects<br />
                ⚙️ React, Figma, Bootstrap
              </div>

              <div class="hover-reveal mt-2">View Projects →</div>
            </div>
          </div>

          <div class="card custom-card col-lg-3 me-3" id='fullstack' onClick={() => handleCardClick("Full-Stack")} style={{ background: "linear-gradient(135deg, #d4fc79, #89e595fd)" }}>
            <div class="card-body">
              <h5 class="card-category" style={{color: "#388e3c"}}>Full-Stack Works</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Code meets deployment.</h6>
              <p class="card-text">Bridging frontend elegance with backend logic.</p>
              <div class="card-stats">
                ✨ 3 Projects<br />
                ⚙️ React, Figma, Bootstrap
              </div>

              <div class="hover-reveal mt-2">View Projects →</div>
            </div>
          </div>

          <div class="card col-lg-3 custom-card" id='aiworks' onClick={() => handleCardClick("AI/ML")} style={{ background: "linear-gradient(135deg, #cd8ef29f, #fa71cd)" }}>
            <div class="card-body">
              <h5 class="card-category" style={{color: "#6a1b9a"}}>AI / ML Works</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">From predictions to precision.</h6>
              <p class="card-text">Solving problems using intelligence & data.</p>
              <div class="card-stats">
                ✨ 2 Projects<br />
                ⚙️ React, Figma, Bootstrap
              </div>

              <div class="hover-reveal mt-2">View Projects →</div>
            </div>
          </div>
          <ProjectDrawer isOpen={drawerOpen} onClose={closeDrawer} category={selectedCategory} />

        </div>
      </div>
    </div>
  )
}

export default Projects
{/* <div id="carouselExampleControls" className="carousel slide carousel-dark" data-ride="carousel" style={{ boxShadow: '9px 7px 10px rgba(128, 128, 128, 0.192)' }}>
              <div className="carousel-indicators carousel-dark">
                <button type="button" data-target="#carouselExampleControls" data-slide-to="0" className="active mx-1" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-target="#carouselExampleControls" data-slide-to="1" className="mx-2" aria-label="Slide 2"></button>
                <button type="button" data-target="#carouselExampleControls" data-slide-to="2" className="mx-2" aria-label="Slide 3"></button>
                <button type="button" data-target="#carouselExampleControls" data-slide-to="3" className="mx-2" aria-label="Slide 4"></button>
                <button type="button" data-target="#carouselExampleControls" data-slide-to="4" className="mx-2" aria-label="Slide 5"></button>
              </div>
              <div className="carousel-inner" >
                <div className="carousel-item active" data-interval="10000">
                  <span class="position-absolute translate-middle roundd-pill badge bg-success d-none d-lg-block" style={{ left: "92%", bottom: "28%", zIndex: "11" }}>
                    <i class="fa-brands fa-html5 fa-2x p-1"></i> <i class="fa-brands fa-css3-alt fa-2x p-1"></i> <i class="fa-brands fa-square-js fa-2x p-1"></i>
                    <i class="fa-brands fa-php fa-2x  p-1"></i>
                  </span>
                  <div className="card card-sm ">

                    <img src={slice} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body justify-content-center p-3">

                      <h5 className="card-title"><strong>Slice: Food Delivery App</strong></h5>
                      <strong>October 2020</strong>
                      <p className="card-text">Slice is a group project led by me.
                        As the name suggests it's a food website built completely on <b> HTML, styled with CSS, and uses javascript as a
                          browser language along with the PHP for backend language to maintain client databases</b>.
                        It's completely made on VS Code. This website is a very basic food website with a basic <b> search feature,
                          order feature, and bill feature</b>. So the person has to choose from the available dishes and the bill will
                        be provided at the end. I would like to work some more on the cart feature and multiple user capability.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                <span class="position-absolute translate-middle roundd-pill badge bg-success d-none d-lg-block" style={{ left: "94%", bottom: "20%", zIndex: "11" }}>
                    <i class="fa-brands fa-html5 fa-2x p-1"></i> <i class="fa-brands fa-css3-alt fa-2x p-1"></i> <i class="fa-brands fa-bootstrap fa-2x p-1"></i>
                    
                  </span>
                  <div className="card card-sm">
                    <img src={education} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body justify-content-center p-3">
                      <h5 className="card-title"><strong>Education Website</strong></h5>
                      <strong>June 2021</strong>
                      <p className="card-text mb-3">This learning website is no different from the learning website available on the internet.
                        It's just the frontend work that I have done <b>using HTML and CSS framework bootstrap. </b>
                        It includes various sections such as <b>the online course section, Review section, Contact section, and many more</b>.
                        I like to take one step ahead and add the backend to maintain databases.</p>

                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                <span class="position-absolute translate-middle roundd-pill badge bg-success d-none d-lg-block" style={{left: "90%", bottom: "30%", zIndex: "11" }}>
                    <i class="fa-brands fa-html5 fa-2x p-1"></i> <i class="fa-brands fa-bootstrap p-1 fa-2x"></i> <i class="fa-brands fa-angular p-1 fa-2x"></i><i class="fa-brands fa-node fa-2x p-1"></i>
                    <i class="fa-solid fa-leaf fa-2x p-1"></i>
                  </span>
                  <div className="card card-sm ">
                    <img src={apscamp} className="img-fluid rounded-start" height="1920px" width="892px" alt="..." />
                    <div className="card-body justify-content-center p-3">
                      <h5 className="card-title"><strong>APS Camps: Tourism App</strong></h5>
                      <strong>March 2022</strong>
                      <p className="card-text">APS Camps is another group project led by me.
                        This app's basic idea is to book camps, treks, and backpacking places for adventures and fun.
                        <b>This is a single-page application</b> as it's entirely built on <b>AngularJs with bootstrap as a CSS framework
                          , NodeJs, and MongoDB as a server-side language to maintain and store user data</b>. We also provide security
                        to our website by doing<b> hashing to the passwords and AngularJS Validation</b>. The app has three categories Camps, Trekking, and
                        Backpacking. The user can book any of them and get the receipt at the end of the booking. As the app has
                        static booking and can't support multi-user features so need to work on it more. </p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data interval="10000">
                <span class="position-absolute translate-middle roundd-pill badge bg-success d-none d-lg-block" style={{left: "90%", bottom: "33%", zIndex: "11" }}>
                <i class="fa-brands fa-html5 fa-2x p-1"></i> <i class="fa-brands fa-bootstrap p-1 fa-2x"></i> <i class="fa-brands fa-react p-1 fa-2x"></i><i class="fa-brands fa-node fa-2x p-1"></i>
                    <i class="fa-solid fa-leaf fa-2x p-1"></i>
                  </span>
                  <div className="card card-sm">
                    <img src={inotebook} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body justify-content-center p-3">
                      <h5 className="card-title"><strong>iNotebook: Notes on cloud</strong></h5>
                      <strong>May 2022</strong>
                      <p className="card-text">iNotebook is another basic but a good project in which <b>user can store their notes on the cloud</b>.<b>It's another single-page application built on ReactJS, a javascript framework, styled with CSS framework Bootstrap, NodeJs, and MongoDB as server-side languages, which maintain two databases, one for a user and a second for notes</b>. It supports a <b> multi-user feature and stores the user-specific notes in the specified user account</b>. The app provides security through <b>hashing the passwords and authorizing the user by providing a unique JSON web token and express validator</b>. The user can perform a function such as add notes, delete a note and edit a note according to user preferences.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-interval="10000">
                <span class="position-absolute translate-middle roundd-pill badge bg-success d-none d-lg-block" style={{ left: "96%", bottom: "19%", zIndex: "11" }}>
                <i class="fa-brands fa-python fa-2x p-1"></i> <i class="fa-solid fa-database fa-2x p-1"></i>
                  </span>
                  <div className="card card-sm">
                    <img src={hospital} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body justify-content-center p-3">
                      <h5 className="card-title"><strong></strong>Hospital Management</h5>
                      <strong>October 2021</strong>
                      <p className="card-text mb-3">Hospital Management App is built entirely on  <b> Python and its GUI-based Library PYQt5 and MYSQL as a backend language</b> for maintaining patient databases. It's a very convenient app for the Management of the records of a hospital. It helps in <b> managing the records of patients, Medicine, and Employees</b>. Once the data is added to the databases,  <b> the admin can delete or update the data using SQL queries</b>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}