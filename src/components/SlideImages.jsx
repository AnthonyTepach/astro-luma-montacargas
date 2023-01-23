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
        <a href="#" class="block">
  <img
    alt="Signage"
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
  />

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
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
  />

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
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
  />

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
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
  />

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
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
  />

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
    src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    class="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
  />

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
