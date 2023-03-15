import React from "react";
import { Carousel } from "flowbite-react";

const Slider = () => {
  return<div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 1
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 2
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 3
    </div>
  </Carousel>
</div>
};

export default Slider;
