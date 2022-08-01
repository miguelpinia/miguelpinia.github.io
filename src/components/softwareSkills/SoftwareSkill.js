import React from 'react';
import './SoftwareSkill.css';
import Tooltip from '@mui/material/Tooltip';

function SoftwareSkill(props) {
  return (
    <div>
      <div className='software-skills-main-div'>
        <ul className='dev-icons'>
          {props.logos.map((logo) => {
            return (
              <Tooltip
                title={logo.skillName}
                placement='top'
                key={logo.skillName}
              >
                <li className='software-skill-inline' name={logo.skillName}>
                  <span
                    className='iconify'
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline='false'
                  ></span>
                </li>
              </Tooltip>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
