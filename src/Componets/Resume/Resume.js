import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../Animations';
import React, {useState} from 'react';
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle,setCarousalOffSetStyle] = useState({})

    const ResumeHeading = (props)=>{
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading :""}</span>

                         {props.fromDate && props.toDate ? 
                         (
                            <div className='heading-date'>
                                {props.fromDate + " " + props.toDate}
                        </div>
                        ):
                        (
                        <div></div>
                )}
                </div>
                <div className='resume-sub-heading'>
                    <span> {props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className='resume-heading-discription'>
                <span> {props.discription ? props.discription : ''}</span>
                </div>
            </div>
        </div>
    };

    const resumeBullets=[
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"},
    ]

    const programmingSkillDetails=[
        {skill:"JavaScript", ratingPercentage:85},
        {skill:"Python", ratingPercentage:85},
        {skill:"React JS", ratingPercentage:85},
        {skill:"React Native", ratingPercentage:70},
        {skill:"Node JS", ratingPercentage:85},
        {skill:"CSS", ratingPercentage:80},
        {skill:"HTML", ratingPercentage:85},
        {skill:"SQL", ratingPercentage:60},
    ]

    const programmingDetails=[
        {
        title:"Personal Portfolio Website", 
        duration: {fromDate: "2021", toDate: "2022"},
        discription: "A Personal Portfolio website to showcase all my details and projects at one place.",
        subHeading: "Technologies Used: React JS, Bootsrap."
    },
    {
        title:"KnowYourRep", 
        duration: {fromDate: "2021", toDate: "2021"},
        discription: "KnowYourRep is an application that allows novice users to keep informed about how well their elected officials are adhering to the platforms in which they were elected. ",
        subHeading: "Technologies Used: React JS, Bootsrap.!#$!@#$!@#$!@#$"
    },
    {
        title:"GoodGet Eccommerce Website", 
        duration: {fromDate: "2021", toDate: "2021"},
        discription: "GoodGet is an e-commerce application that allows users to buy and sell items in a p2p sales experience.",
        subHeading: "Technologies Used: React JS, Bootsrap.@#!@#!@#%!@#%!@#"
    }
    ]

    let fadeInScreenHandler = (screen)=>{
        if (screen.fadeScreen  !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  return (
  
  <div className='resume-container screen-container' id={props.id || ""}>
      <div className='resume-content'>
          <ScreenHeading title={"Resume"}  subHeading = {"My Formal Bio Details"}/>
      </div>

  </div>
  )
}
