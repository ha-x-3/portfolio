import React from 'react';
import logoReflection from '../assets/LogoReflection.svg';
import '../App.css';

export default function Home() {
  return (
    <div className='home' id='home'>
      <div className='homeImage'>
        <img src={logoReflection} alt="Brittney Epperson <A phoenix who CODES/>" id='phoenixImage'/>
      </div>
    </div>
  )
}
