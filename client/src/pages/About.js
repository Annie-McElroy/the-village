import React, { useEffect } from 'react';
import TeamMember from '../components/TeamMember';
import BackMeUp from '../components/BackBtn';

export default function About() {
  // Define an array of data for your cards
  
  const cardData = [
    {
      avatarSrc: '/images/gravatar.png',
      title: 'Dahlia Guido',
      description: 'This impressive UI developer was the artiste behind our app. Officially dubbed Lead Design Director.',
      // linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      // gitHub: 'https://github.com/CypherNyx'
    },
    {
      avatarSrc: '/images/AvatarMakerVal.png',
      title: 'Valerie Rojas',
      description: 'Assistant to the Lead Design Director. CSS is the trophy wife of coding. She throws a fit over the smallest things, but she sure is nice to look at.',
      // linkedIn: 'https://www.linkedin.com',
      // gitHub: 'https://www.github.com/'
    },
    {
      avatarSrc: '/images/avatar-annie.png',
      title: 'Annie McElroy',
      description: 'Our lead Queen Coder of Backend. Literally, a wizard in real life. She was committed to this app through sickness and in health.',
      // linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      // gitHub: 'https://www.github.com'
    },
    {
      avatarSrc: '/images/avatar-abe.png',
      title: 'Abe Omaits',
      description: 'The brains behind this full operation. He found a village to raise this idea and bring it to life.',
      // linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      // gitHub: 'https://www.github.com'
    },
    {
      avatarSrc: '/images/kenny.png',
      title: 'Lekendrick McKeller',
      description: 'Officially dubbed King of FullStack. CSS or BackEnd, the man can do it all.',
      // linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      // gitHub: 'https://www.github.com'
    },
    // Add more card data objects for each card
    // ...
  ];

  return (
    
    <div className='pageFrame'>
      <BackMeUp />
      {cardData.map((data, index) => (
        <TeamMember key={index} {...data} />
      ))}
    </div>
  );
}