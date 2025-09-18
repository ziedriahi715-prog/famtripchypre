import React from 'react'
import MenuFooter from './MenuFooter'
import Programme from './programme/Programme'
import Parten from './partenaires/Parten'
import TmeFamily from './tme/TmeFamily'
import Trombinoscope from './trombinoscope/Trombinoscope'
import WorkshopComponent from './workshop/WorkshopComponent'

interface PageName{
    name : string;
}

const PageSwitcher: React.FC<PageName> = ({name}) => {
  return (
    <div className="md:mx-auto md:max-w-4xl pb-[100px]">
    {/* <Programme/> */}

      {
        name == "programmes" ? <Programme/> : ''
      }

      {
        name == "partenaires" ? <Parten/> : ""
      }

      {
        name == "tme" ? <TmeFamily/> : ""
      }
      
      {
        name == "trombinoscope" ? <Trombinoscope/> : ""
      }
      {
        name == "workshop" ? <WorkshopComponent/> : ""
      }
    </div>
  )
}

export default PageSwitcher