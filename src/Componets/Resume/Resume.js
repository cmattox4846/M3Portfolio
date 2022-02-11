import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../Animations";
import React, { useState } from "react";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading" >
            <div className="heading-bullet">
                <span>{props.heading ? props.heading : " "}</span>
            <div className="heading-date">2021-2021</div>
            {/* {props.fromDate && props.toDate ? 
            (
              <div className="heading-date"> 
                {props.fromDate + " " + props.toDate}
              </div>
            ) :
            (
              <div></div>
            )} */}
            </div>
         
          <div className="resume-sub-heading">
            <span> {props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span> {props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap.",
    },
    {
      title: "KnowYourRep",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "KnowYourRep is an application that allows novice users to keep informed about how well their elected officials are adhering to the platforms in which they were elected. ",
      subHeading: "Technologies Used: React JS, Bootsrap.!#$!@#$!@#$!@#$",
    },
    {
      title: "GoodGet Eccommerce Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "GoodGet is an e-commerce application that allows users to buy and sell items in a p2p sales experience.",
      subHeading: "Technologies Used: React JS, Bootsrap.@#!@#!@#%!@#%!@#",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"devCodeCamp"}
        subHeading={"FullStack Software Development Certification"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Western International University "}
        subHeading={"B.S. -  Business Minor in Information Technology "}
        fromDate={"2008"}
        toDate={"2012"}
      />
      <ResumeHeading
        heading={"Community College of the Air Force"}
        subHeading={"A.A.S. - Electronic Engineering"}
        fromDate={"2004"}
        toDate={"2006"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"OnPoint Market Research Group"}
        subHeading={"IT Administrator (Contractor)"}
        fromDate={"2018"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          OnPoint Market Research Group is a digital market company that focuses
          on led generation via sports and music venues
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed and maintained Salesforce APIs, interfaces, and Custom
          database reports.
        </span>
        <br></br>
        <span className="resume-description-text">
          - Provided hardware and software support for end-users in the field.
        </span>
        <br />
        <span className="resume-description-text">
          - Interfaced with vendors and area staff to ensure proper installation
          of equipment.
        </span>
        <br />
        <span className="resume-description-text">
          - Maintaining custom CSS, WordPress, and JavaScript code in order to
          provide premier Website Design.
        </span>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet">
            <span>{skill.skill}</span>
            <div className="skill-precentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-precentage"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.heading}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.fromDate}
          toDate={projectsDetails.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="a;slkdfl;KADRLKAHS;JGHSJKHASLKGHJ'HJGSD"
      />
      <ResumeHeading
        heading="Teaching1"
        description="a;slkdfl;KADRLKAHS;JGHSJKHASLKGHJ'HJGSD"
      />
      <ResumeHeading
        heading="Teaching2"
        description="a;slkdfl;KADRLKAHS;JGHSJKHASLKGHJ'HJGSD"
      />
    </div>,

    // {
    //    <ResumeHeading
    //         heading = {"SeaTow"}
    //         subHeading={"Captain and Rigger (Seasonal)"}
    //         fromDate={"2021"}
    //         toDate={"2021"}/>
    //         <ResumeHeading
    //         heading = {"TriageLogic LLC"}
    //         subHeading={"IT Administrator/Customer Support (Contractor)	"}
    //         fromDate={"2020"}
    //         toDate={"2021"}/> 
    // },
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullets-logo"
          src={require(`../../Assets/Resume/${bullet.logoSrc}`)}
          alt="Oops,,,, no internet connection"
        />
        <span className="bullets-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails.map((ResumeDetails) => ResumeDetails)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullets-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
