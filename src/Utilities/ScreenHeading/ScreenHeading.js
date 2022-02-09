import React from 'react';
import "./ScreennHeading.css"

export default function ScreennHeading(props) {
  return <div className='heading-container'>
      <div className='screen-heading'>
          <span>{props.title}</span>
      </div>

    {
        (props.subHeading)? (
            <div className='scree-sub-heading'>
                <span>{props.subHeading}</span>
            </div>
        ):<div></div>
    }

    <div className='heading-seperator'>
        <div className='seperator-line'>
            <div className='seperator-blob'>
                <div></div>
            </div>
        </div>
    </div>
  </div>;
}

