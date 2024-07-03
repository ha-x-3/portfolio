import React from 'react';
import logo from '../assets/BEP_LOGO_LARGE_TOP.svg';
import logoReflection from '../assets/BEP_LOGO_LARGE_REFLECTION.svg';
import '../App.css';

export default function Home() {
  return (
    <div className='home' id='home'>
      <div className='homeImage'>
        <img src={logo} alt="Brittney Epperson <A phoenix who CODES/>" id='phoenixImage'/>
        <img src={logoReflection}  alt="</ SEDOC ohw xineohp A> nosreppE yenttirB" id='phoenixImageReflection' />
      </div>
    </div>
  )
}
