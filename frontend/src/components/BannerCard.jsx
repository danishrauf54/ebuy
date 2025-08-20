import React from 'react';

const BannerCard = ({ banner, isLarge = false }) => {
  const { title, description, image } = banner;

  return (
    <div className={`relative overflow-hidden rounded-lg group cursor-pointer ${
      isLarge ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
    }`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col justify-center p-3 sm:p-4 md:p-6 text-white">
        <h3 className={`font-bold mb-1 sm:mb-2 ${isLarge ? 'text-lg sm:text-2xl md:text-3xl' : 'text-sm sm:text-lg md:text-xl'}`}>
          {title}
        </h3>
        <p className={`mb-2 sm:mb-4 opacity-90 ${isLarge ? 'text-xs sm:text-sm md:text-lg' : 'text-xs sm:text-sm'}`}>
          {description}
        </p>
        <button className="bg-white text-black px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors w-fit">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default BannerCard;
