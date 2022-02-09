import React, {useState} from 'react';
import { Total_Screens, Get_Screen_Index } from '../../../Utilities/CommonUtilities';
import ScrollService from '../../../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css"


export default function Header() {
    const [selectedScreen, setSelectedScreen] = useState(0)
    const [showHeaderOptions, setShowHeaderOptions]= useState(false)

    const updateCurrentScreen = (currentScreen)=>{
        if(!currentScreen || !currentScreen.screenInView)
        return;
        let screenIndex = Get_Screen_Index(currentScreen.screenInView)
        if(screenIndex < 0)
        return
    }

    let currentScreenSubscription = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)
  return <div>

  </div>;
}
