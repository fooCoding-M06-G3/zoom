import React from 'react';
import './AvatarStyle.css';
import Avatarlist from './AvatarList';

const Avatar = props => {
  const avatarlistarray = [
    {
      name: 'Vehicle',
      categoryid: 1,
      src:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA3lnYzbtYUBwCdP0KyjWqzxotP0InKekXv04_MEfVcV4jcYFd',
    },
    {
      name: 'Electronics',
      categoryid: 2,
      src:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Personal',
      categoryid: 3,
      src:
        'https://previews.123rf.com/images/alekseyvanin/alekseyvanin1705/alekseyvanin170500959/77418635-t-shirt-icon-vector-filled-flat-sign-solid-colorful-pictogram-isolated-on-white-men-s-clothing-symbo.jpg',
    },
    {
      name: 'For the home',
      categoryid: 4,
      src:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgPAh_kC5spdBU5K5WcxAzyRQ4GWLpUKAXvIgNOrOS4r3wE_6q',
    },

    {
      name: 'Sparetime & Hobby',
      categoryid: 5,
      src:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2D1R1Yh-0llVOvcmGOqWTCskKhOAWurQpAtKYrFHNYK88zSEs',
    },
    {
      name: 'Residence',
      categoryid: 6,
      src:
        ' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhcftw4A5tbg5pTGNiwAK0MbnrAq2B0pSN0ti7_GDadR5UR3QR',
    },
    {
      name: 'Training',
      categoryid: 7,
      src:
        'https://thumbs.dreamstime.com/b/design-book-concept-vector-illustration-eps-graphic-50716214.jpg',
    },
    {
      name: 'Travel',
      categoryid: 8,
      src:
        'https://previews.123rf.com/images/yupiramos/yupiramos1811/yupiramos181105195/111553727-avatar-boy-travel-trip-airport-and-vacation-theme-colorful-design-vector-illustration.jpg',
    },
  ];
  const arrayavatarcard = avatarlistarray.map((avatarcard, i) => {
    return (
      <Avatarlist
        id={avatarlistarray[i].categoryid}
        src={avatarlistarray[i].src}
        name={avatarlistarray[i].name}
        key={i}
      />
    );
  });
  return <div className="mainpage">{arrayavatarcard}</div>;
};

export default Avatar;
