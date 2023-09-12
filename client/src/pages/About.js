import React, { useEffect } from 'react';
import TeamMember from '../components/TeamMember';
import BackMeUp from '../components/BackBtn';

export default function About() {
  // Define an array of data for your cards
  
  const cardData = [
    {
      avatarSrc: '/images/gravatar.png',
      title: 'Dahlia Guido',
      description: 'This impressive UI developer was the artiste behind our app.',
      linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      gitHub: 'https://www.github.com'
    },
    {
      avatarSrc: '/images/gravatar.png',
      title: 'Valerie Rojas',
      description: 'This impressive UI developer was the artiste behind our app.',
      linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      gitHub: 'https://www.github.com'
    },
    {
      avatarSrc: '/images/gravatar.png',
      title: 'Annie McElroy',
      description: 'This impressive UI developer was the artiste behind our app.',
      linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      gitHub: 'https://www.github.com'
    },
    {
      avatarSrc: '/images/gravatar.png',
      title: 'Abe Omaits',
      description: 'This impressive UI developer was the artiste behind our app.',
      linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      gitHub: 'https://www.github.com'
    },
    {
      avatarSrc: '/images/gravatar.png',
      title: 'Lekendrick McKeller',
      description: 'This impressive UI developer was the artiste behind our app.',
      linkedIn: 'https://www.linkedin.com/in/dahlia-guido/',
      gitHub: 'https://www.github.com'
    },
    // Add more card data objects for each card
    // ...
  ];

  return (
    
    <div>
      <BackMeUp />
      {cardData.map((data, index) => (
        <TeamMember key={index} {...data} />
      ))}
    </div>
  );
}
