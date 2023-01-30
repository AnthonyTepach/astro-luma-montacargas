import React, { useState } from "react";
import Slider from "react-slick";

export default function SlideImages() {
  const [nav2, setNav2] = useState();

  return (
    <div>
      <Slider
        asNavFor={nav2}
        autoplay={true}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={false}
        onLazyLoad={'ondemand'}
        centerMode={true}
      >

        <div>
          <a href="#" className="block">
            <img
              alt="Signage"
              src="../../src/recursos/bobcat.png"
              class="h-56 w-full rounded  object-contain sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-1 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>



        <div>
          <a href="#" className="block">
            <img
              alt="Signage"
              src="../../src/recursos/camso.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>


        <div>
          <a href="#" className="block">
            <img
              alt="Signage"
              src="../../src/recursos/clark.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>


        <div>
          <a href="#" className="block">
            <img
              alt="Signage"
              src="../../src/recursos/crown.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>


        <div>
          <a href="#" className="block">
            <img
              alt="Signage"
              src="../../src/recursos/deka.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>


        <div>
          <a href="#" class="block">
            <img
              alt="Signage"
              src="../../src/recursos/hyster.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>


        <div>
          <a href="#" class="block">
            <img
              alt="Signage"
              src="../../src/recursos/mitsubishi.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>

            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>


        <div>
          <a href="#" class="block">
            <img
              alt="Signage"
              src="../../src/recursos/total.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>


        <div>
          <a href="#" class="block">
            <img
              alt="Signage"
              src="../../src/recursos/toyota.png"
              class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"/>
            <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
              <strong class="font-medium">Company Name</strong>
              <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
              <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
            </div>
          </a>
        </div>

        
      </Slider>
    </div>
  );
}
