import React from 'react';
import profilePic from '../../../assets/linkedin-profile-pic.jpeg';
import champPic from '../../../assets/champ.jpeg';
import './index.css';

export default function About() {
  return (
    <div className='d-inline-flex flex-column justify-content-center m-3 align-items-center text-center'>
      <img src={profilePic} className='no-grow card p-2'></img>
      <h5 className='card m-2 p-2'>Hello! My name is John McAvaddy. I am a front-end and back-end web developer who enjoys automating tasks and working on large, complex projects.</h5>
      <img src={champPic} className='no-grow card p-2'></img>
      <h5 className='card m-2 p-2'>When I am not working, I enjoy hiking and spending time at the beach with my dog, Champ!</h5>
    </div>
  );
}