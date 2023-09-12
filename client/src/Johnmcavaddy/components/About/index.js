import React from 'react';
import profilePic from '../../../assets/linkedin-profile-pic.jpeg';
import './index.css';

export default function About() {
  return (
    <div className='d-inline-flex flex-column justify-content-center'>
      <img src={profilePic} className='no-grow card p-2'></img>
      <h5 className='card m-2 p-2'>Hello! My name is John McAvaddy. I am a full stack web developer that enjoys automating tasks and working on large, complex projects.</h5>
    </div>
  );
}