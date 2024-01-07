import React from 'react'
import "./Contact.css"
const Contact = ({theme}) => {

  return (
    <div className='main-contact-container' style={{ backgroundColor: theme == "light" ? "#461959" : "black" }}>

      <section id="contact">

        <h1 className="section-header">Contact</h1>

        <div className="contact-wrapper">



          <form id="contact-form" className="form-horizontal" role="form">

            <div className="form-group">
              <div className="col-sm-12" >
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" defaultValue="" required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" defaultValue="" required />
              </div>
            </div>

            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

            <button className="btn btn-primary send-button" id="submit" type="submit" defaultValue="SEND">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>

            </button>

          </form>



          <div className="direct-contact-container">

            <ul className="contact-list">
              <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Indore, MadhyaPradesh</span></i></li>

              <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">123 456 789</a></span></i></li>
              <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:surbhijainrko@gmail.com" title="Send me an email">Surbhijainrko@gmail.com</a></span></i></li>

            </ul>

            <hr />
            <ul className="social-media-list">
              <li>
                <a href="https://github.com/Surbhijain01" target="_blank" className="contact-icon">
                <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li> 
              <li><a href="https://codepen.io/SURBHI-JAIN-the-styleful" target="_blank" className="contact-icon">
                <i className="fa fa-codepen" aria-hidden="true"></i></a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li><a href="" target="_blank" className="contact-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i></a>
              </li>
            </ul>
            <hr />

            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

          </div>
        </div>


      </section>



    </div>
  )
}

export default Contact