import React from 'react';

const CategoryCard = ({ category, onClick }) => {
  const { name, icon, isActive } = category;

  return (
    <button
      onClick={() => onClick && onClick(category)}
      className={`flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-md ${
        isActive
          ? 'border-red-500 bg-red-500 text-white'
          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
      }`}
    >
      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{icon}</div>
      <span className="text-xs sm:text-sm font-medium text-center">{name}</span>
    </button>
  );
};

export default CategoryCard;
