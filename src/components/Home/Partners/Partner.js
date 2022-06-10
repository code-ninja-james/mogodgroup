import React from 'react';
import ceo from '../../../images/team/seo/1.jpg'
import developer from '../../../images/team/seo/2.jpg'
import marketer from '../../../images/team/seo/3.jpg'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const slideImages = [
    {
      url: ceo,
      caption: 'Slide 1'
    },
    {
      url: developer,
      caption: 'Slide 2'
    },
    {
      url: marketer,
      caption: 'Slide 3'
    },
  ];

function Partner() {
    return (
      <div className="features-container   m-auto">
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `${slideImage.url}`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      </div>
    )
}

export default Partner
