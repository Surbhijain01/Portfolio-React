import React from 'react'
import "./About.css"
import pdf from "./Resume.pdf"
const About = ({ theme }) => {
  let lightimg = "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)";
  let darkimg = "linear-gradient(90deg, rgba(36,11,40,1) 100%, rgba(239,63,251,1) 100%)";
  return (
    <div>

      <div className="about-wrapper">
        <div className="about-left" style={{ backgroundImage: theme == "light" ? lightimg : darkimg }}>
          <div className="about-left-content">
            <div>
              <div className="shadow">
                <div className="about-img">
                  <img src="../src/Images/profile.jpeg" alt="about image" />
                </div>
              </div>

              <h2>SURBHI JAIN</h2>
              <h3>Web developer</h3>
            </div>

            <ul className="icons">
              {/* <li><i className="fab fa-facebook-f"></i></li>
              <li><i className="fab fa-twitter"></i></li>
              */}
              <li>
                <a href="https://github.com/Surbhijain01" target="_blank" className="contact-icon">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/SURBHI-JAIN-the-styleful" target="_blank" className="contact-icon">
                  <i className="fa fa-codepen" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/surbhi-j-459036258/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-right">
          <h1>Hello<span>!</span></h1>
          <h2>Here's who I am & what I do</h2>
          <div className="about-btns">
            <a href={pdf} target='_blank'><button type="button" className="btn btn-pink">resume / CV</button></a>
            <a href="https://github.com/Surbhijain01" target='_blank'> <button type="button" className="btn btn-white">Git hub</button></a>
          </div>

          <div className="about-para">
            <p>Hello,I'm Surbhi Jain, a Web Developer skilled in HTML, CSS, JavaScript, and Bootstrap. With a background in Computer Application, I'm passionate about crafting seamless and visually appealing user experiences.</p>
            <p> Currently seeking opportunities as a Web Developer or Front-End Developer, I'm excited about contributing my skills to innovative projects in the ever-evolving world of web development.</p>
          </div>
          <div className="credit">❤</div>
        </div>
      </div>


    </div>
  )
}

export default About