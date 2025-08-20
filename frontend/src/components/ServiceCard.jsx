import React from 'react';

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;

  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
        <span className="text-xl sm:text-2xl">{icon}</span>
      </div>
      <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
