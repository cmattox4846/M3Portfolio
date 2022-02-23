import React, {useState} from "react";
import { ReactTypical } from "@deadcoder0904/react-typical";

import "./ContactMe.css";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../Animations";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";


export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

const[name,setName] = useState("")
const[email,setEmail] = useState("")
const[message,setMessage] = useState("")
const[banner,setBanner] = useState("")
const[bool,setBool] = useState(false)

const handleName=(event)=>{
    setName(event.target.value)
}
const handleEmail=(event)=>{
    setEmail(event.target.value)
}
const handleMessage=(event)=>{
    setMessage(event.target.value)
}



  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Lets Keep In Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            {""}
            <ReactTypical loop={Infinity} steps={["Get In Touch ", 2000]} />
          </h2>
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
            <div className="img-back">
                <h4> Send Your Email Here!</h4>
                <img src={imgBack} alt='image not found'/>
            </div>
            <form>
                <p>{banner}</p>
                <label htmlFor="name">Name</label>
                <input type='text'
                onChange={handleName}
                value={name}
                />
                <label htmlFor="email">Email</label>
                <input type='email'
                onChange={handleEmail}
                value={email}/>
                <label htmlFor="message">Message</label>
                <textarea type='text'
                onChange={handleMessage}
                value={message}/>
                <div className="send-btn">
                    <button type="submit">
                        send<i className="fa fa-paper-plane"/>
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
