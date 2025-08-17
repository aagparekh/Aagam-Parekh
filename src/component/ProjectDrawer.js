import React from "react";
import education from './education.jpg'
import slice from './slice.jpg'
import apscamp from './apscamp.jpg'
import inotebook from './inotebook.jpg'
import hospital from './hospital.jpg'
import inchat from './inchat.png'
import bot from './bot.jpg'
import nlp from './nlp.png'
import imdb from './imdb.png'
import "./ProjectDrawer.css";

const ProjectDrawer = ({ isOpen, onClose, category }) => {
  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-content">
        <button className="close-btn" onClick={onClose}>✕</button>
        <h4 className="drawer-title text-center" style={category === "Frontend" ? { color: "#ff5722" } : category === "Full-Stack" ? { color: "#388e3c" } : { color: "#6a1b9a" }}>{category} Works</h4>
        {/* <p>Here you can display all related projects for "{category}" category.</p> */}
        {category === "Frontend" &&
          <>
            <div className="row justify-content-center mt-2 ">
              <div className="col-md-5">
                <div className="card card-sm project-card">

                  <img src={imdb} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">
                    {/* <span class="position-absolute translate-middle round-pill d-none d-lg-block" style={{ left: "76%", bottom: "30%", zIndex: "11" }}> */}


                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                      <h5 className="card-title"><strong>IMDB Clone</strong></h5>
                      <button type="button" class="btn btn-sm btn-frontend" onClick={() => window.open("https://github.com/aagparekh/IMDB-Clone", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    {/* </span> */}
                    <strong>August 2023</strong>
                    <p className="card-text">A movie and TV show database where users can explore titles, view ratings, read descriptions, and discover trending entertainment content.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>ReactJS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="card card-sm project-card">
                  <img src={apscamp} className="img-fluid rounded-start" height="1920px" width="892px" alt="..." />
                  <div className="card-body justify-content-center p-3">
                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                      <h5 className="card-title"><strong>APS Camps: Tourism App</strong></h5>

                      <button type="button" class="btn btn-sm btn-frontend" onClick={() => window.open("https://github.com/aagparekh/APSCamps-Travelling-Website", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>March 2022</strong>
                    <p className="card-text">APS Camps is a seamless adventure booking app for camps, treks, and backpacking with instant receipts and a secure booking flow.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>Bootstrap</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>AngularJS</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>NodeJs</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>MongoDB</span>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 py-4">
                <div className="card card-sm project-card">
                  <img src={education} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">
                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                      <h5 className="card-title"><strong>Education Website</strong></h5>
                      <button type="button" class="btn btn-sm btn-frontend" onClick={() => window.open("https://github.com/aagparekh/Education-website", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>June 2021</strong>
                    <p className="card-text">A modern learning hub with curated course sections, real student reviews, and seamless navigation—designed to feel simple, smart, and scroll-worthy.</p>
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>Bootstrap</span>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 py-4">
                <div className="card card-sm project-card">

                  <img src={slice} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">

                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                      <h5 className="card-title"><strong>Slice: Food Delivery App</strong></h5>
                      <button type="button" class="btn btn-sm btn-frontend" onClick={() => window.open("https://github.com/aagparekh/Slice-food-website", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>October 2020</strong>
                    <p className="card-text"> Slice serves up a quick and easy food-ordering experience with dish selection, instant billing, and a user-friendly interface.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>Bootstrap</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>PHP</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>MySQL</span>
                    </div>
                  </div>
                </div>
              </div>




              {/* <div className="col-md-5"></div> */}

            </div>
          </>
        }
        {category === "Full-Stack" &&
          <>
            <div className="row justify-content-center mt-2">
              <div className="col-md-5 ">
                <div className="card card-sm project-card">

                  <img src={inchat} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">

                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                    <h5 className="card-title"><strong>InChat: Web Chat App</strong></h5>
                      <button type="button" class="btn btn-sm btn-fullstack" onClick={() => window.open("https://github.com/aagparekh/inChat", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>March 2023</strong>
                    <p className="card-text">InChat is a dynamic social platform designed for seamless real time conversations, group chats, and collaborative interactions all in one connected space.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>ReactJS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ">

                <div className="card card-sm project-card">
                  <img src={inotebook} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">
                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                    <h5 className="card-title"><strong>iNotebook: Notes on the Go</strong></h5>
                    {/* <h5 className="card-title"><strong>IMDB Clone</strong></h5> */}
                      <button type="button" class="btn btn-sm btn-fullstack" onClick={() => window.open("_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>May 2022</strong>
                    <p className="card-text">iNotebook is a single-page note-taking app where users can securely add, edit, and delete their personal notes with multi-user support.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>ReactJS</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 pt-5">
                <div className="card card-sm project-card">
                  <img src={hospital} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">
                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                    <h5 className="card-title"><strong>Hospital Management</strong></h5>
                    {/* <h5 className="card-title"><strong>IMDB Clone</strong></h5> */}
                      <button type="button" class="btn btn-sm btn-fullstack" onClick={() => window.open("https://github.com/aagparekh/Hospital-management-system", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>October 2021</strong>
                    <p className="card-text mb-3">Hospital Management App is a user-friendly desktop application designed to manage records of patients, medicines, and employees efficiently. It allows admins to add, update, or delete data with ease for streamlined hospital operations.</p>
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#388e3c" }}>ReactJS</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-5"></div> */}
            </div>
          </>
        }
        {category === "AI / ML" &&
          <>
            <div className="row justify-content-center my-3">
              <div className="col-md-5 ">
                <div className="card card-sm project-card">

                  <img src={bot} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">

                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                    <h5 className="card-title"><strong>Bot Detection in Online Games</strong></h5>
                    {/* <h5 className="card-title"><strong>IMDB Clone</strong></h5> */}
                      <button type="button" class="btn btn-sm btn-aiml" onClick={() => window.open("https://github.com/aagparekh/Bot-Detection-in-Online-Games", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>March 2025</strong>
                    <p className="card-text">A system that analyzes player behavior in online games using Large Language Models to detect and classify bots, enabling fairer gameplay through intelligent pattern recognition.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>ReactJS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ">

                <div className="card card-sm project-card">
                  <img src={nlp} className="img-fluid rounded-start" alt="..." />
                  <div className="card-body justify-content-center p-3">
                    <div class="d-grid gap-2 d-md-flex justify-content-between">
                    <h5 className="card-title"><strong>Sentiment Analysis of Employee’s Reviews</strong></h5>
                    {/* <h5 className="card-title"><strong>IMDB Clone</strong></h5> */}
                      <button type="button" class="btn btn-sm btn-aiml" onClick={() => window.open("https://github.com/aagparekh/Sentiment-Analysis-Dashboard", "_blank")}>View Source Code <i class="fa-brands fa-github fa-1x"></i></button>
                    </div>
                    <strong>March 2024</strong>
                    <p className="card-text">A real-time dashboard that analyzes employee reviews using a BERT-based model with 90% accuracy, delivering actionable insights into organizational sentiment.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <hr></hr>
                    <h6><strong>Technologies Used</strong></h6>
                    <div className="d-flex gap-1 mt-2">
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>HTML5</span>
                      {/* <span class="badge rounded-pill" style={{ backgroundColor: "#ff5722" }}>HTML5</span> */}
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>CSS3</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>JavaScript</span>
                      <span class="badge rounded-pill" style={{ backgroundColor: "#6a1b9a" }}>ReactJS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-5 pt-5">
                  <div className="card card-sm project-card">
                    <img src={hospital} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body justify-content-center p-3">
                      <h5 className="card-title"><strong></strong>Hospital Management</h5>
                      <strong>October 2021</strong>
                      <p className="card-text mb-3">Hospital Management App is a user-friendly desktop application designed to manage records of patients, medicines, and employees efficiently. It allows admins to add, update, or delete data with ease for streamlined hospital operations.</p>
                    </div>
                  </div>
                </div> */}
              {/* <div className="col-md-5"></div> */}
            </div>
          </>
        }

      </div>
    </div>
  );
};

export default ProjectDrawer;
