import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import ReactMapGl from "react-map-gl";
import { MapConsumer, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import AnimateLetters from "../AnimatedLetters";
import "./index.scss";
const Contact=()=>{
  const [viewPort,setViewPort]=useState({
    latitude:37.7577,
    longitude:76.7656,
    zoom:10
  });
  const refForm=useRef();
    const [letterClass,setLetterClass]=useState("text-animate")
    useEffect(()=>{
        setTimeout(()=>{
           setLetterClass("text-animate-hover")
       },3000)
   },[])
   const sendEmail=(e)=>{
   e.preventDefault()
   
   emailjs.sendForm('service_ekn3fjs', 'template_7xh0qtu', refForm.current,"G4ub5UPp1OnOQ_2W9")
    .then(function(response) {
      console.log(response);
       alert('Message successfully sent !');
    }, function(error) {
      console.log(error.message);
       alert("Failed to send message ,please try again")
    });
   }
    return(
        <>        
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimateLetters letterClass={letterClass} strArray={["C",'o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                    I'm interested in freelance opportunity -especially ambitious or large projects.
                    However .if other request or question ,don't hesitate to contact me using below form 
                    either.
                </p>
           <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail} >
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="from_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="from_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button flat2" value="SEND" />
                  <a href="https://drive.google.com/file/d/1imWqFXF--v846c-jrjUnVO5Q5EHMIBoy/view?usp=drivesdk"
                   className="flat-button flat2 "
                   target='_blank'
                   >Download Resume</a>
                </li>
              </ul>
            </form>
           
          </div>            
          </div>
          <div className="info-map">
               Aryan Gupta,
               <br/>
               India<br/>
               1978 Sector 9, Ambala city<br/>
               <span>ue218015.aryan.it@gmail.com</span>
          </div>
          <div className="map-wrap">
          
                <h1 className="text-zone">
                    <AnimateLetters letterClass={letterClass} strArray={["T","h","a","n","k"," ","y","o","u"]} idx={15}/>
                </h1>
               
            {/* <ReactMapGl
            mapboxApiAccessToken={"sk.eyJ1IjoiYXJ5YW5ndXB0YTA1MTAiLCJhIjoiY2wyNG4zZjJ6MDl6cTNmcWk5enlvdHRnciJ9.YA_W0CRjzgvRty9kNHVrNQ"}
            {...viewPort}
            width="100%"
            height="100%"
            onViewportChange={(viewPort)=>setViewPort(viewPort)}/>

             */}
          {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
          </div>
        </div>
        <Loader type="pacman"/>
        </>

    )
}
export default Contact;