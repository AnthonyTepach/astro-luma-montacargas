import React, { useState } from 'react';
import Slider from 'react-slick';


export default function SlideImages() {
  
  const [nav2, setNav2] = useState();

  return (
    <div>
      
     
      <Slider
        asNavFor={nav2}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        onLazyLoad = {3}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
