import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductPage = () => {
  const [activeImage, setActiveImage] = useState('');

  const images = {
    img1: '/Users/haqueiftekharul/Desktop/Desktop/fiverr-kaizen/my-tailwind-app/src/assets/images/product-image-1.JPG',
    img2: '/Users/haqueiftekharul/Desktop/Desktop/fiverr-kaizen/my-tailwind-app/src/assets/images/product-image-2.JPG',
    img3: '/Users/haqueiftekharul/Desktop/Desktop/fiverr-kaizen/my-tailwind-app/src/assets/images/product-image-3.JPG',
    img4: '/Users/haqueiftekharul/Desktop/Desktop/fiverr-kaizen/my-tailwind-app/src/assets/images/product-image-.JPG',
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* Product Content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center w-full lg:w-5/5">
        <div className="lg:w-1/2 flex-shrink-0">
          <video
            controls
            className="w-full h-full aspect-rectangle object-cover rounded-xl"
          >
            <source
              src="./src/assets/videos/AwakenPromoBluePearl.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Image Gallery */}
          <div className="flex flex-row justify-between h-24 mt-5">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>

        <div className="lg:w-1/2 flex-shrink-0">
          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

const ProductInfo = () => (
  <div className="p-5 flex flex-col h-full">
    <span className="text-blue-400 font-semibold">Video Category</span>
    <h1 className="text-3xl font-bold mt-5 mb-3">Title Goes Here</h1>
    <p className="text-gray-700 mb-5">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos iste natus dolor explicabo? Repudiandae numquam illo cumque odio eveniet excepturi debitis eligendi accusantium odit, optio vel ab enim, a natus.
      <br />
      <br />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, ad nisi iste blanditiis odio possimus veniam cupiditate voluptatum doloribus tempora asperiores nesciunt officia alias eligendi ipsa perferendis a ipsum quia.
    </p>
    <h6 className="text-2xl font-semibold">$ 99.00</h6>
    <div className="flex flex-row items-center gap-5 mt-5">
      <button className="bg-blue-300 text-blue font-semibold py-3 px-16 rounded-xl h-full">
        Add to Cart
      </button>
      <button className="bg-blue-300 text-blue font-semibold py-3 px-16 rounded-xl h-full">
        <FontAwesomeIcon icon={faHeart} className="mr-2" />
        Wishlist
      </button>
    </div>
  </div>
);

export default ProductPage;
