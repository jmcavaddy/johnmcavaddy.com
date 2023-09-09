import React from 'react';
import profilePic from '../../assets/linkedin-profile-pic.jpeg';


export default function About() {
  return (
    <div>
      <img src={profilePic}
      className='card p-2'
        // style={{ border: '2px solid #0d6efd', padding: '5px', borderRadius: '5px' }}
      >
      </img>
      <p>Insert short paragraph about myself</p>
    </div>
  );
}
