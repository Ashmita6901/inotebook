import React from 'react'
import vid from '../clouds.mov'
import image from './notebook.png'
import './main.css'

const main = (props) => {
  localStorage.removeItem('token');
  const mystyle={
    fontSize: "100px",
    fontFamily: "cursive",
    fontWeight: "bold"
  }
  const para={
    fontSize: '26px',
    fontWeight: 'bold'
  }
  const vidstyle={
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: '118vh',
    width: '100vw',
    zIndex: -1,
    opacity: .5
  }
  return (
    <div>
      <video autoPlay muted loop style={vidstyle}>
        <source src={vid} type="video/mp4"/>
      </video>
        <div className="d-flex justify-content-between">
          <div>
            <div style={mystyle}>iNotebook</div>
            <div style={{fontSize: '40px', transform: 'translate(150px, -20px)'}}>Your notebook on the cloud. . .</div>
            <div style={para}>Want to store your notes and keep them safe?
              <div style={{transform: 'translateX(350px)'}}>iNotebook is the answer.</div>
            </div>
            <div style={para}>
              <ul>
                <li>Signup/Login</li>
                <li>Goto Home</li>
                <li>Now you can add, read, delete and update notes.</li>
              </ul>
              We provide utmost security to your data.
            </div>
          </div>
          <div><img src={image} alt='book'/></div>
        </div>
    </div>
  )
}

export default main