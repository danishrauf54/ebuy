import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import BannerCard from '../components/BannerCard';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import CountdownTimer from '../components/CountdownTimer';
import {
  categories,
  bestSellingProducts,
  flashSaleProducts,
  exploreProducts,
  newArrivalBanners,
  services
} from '../data/products';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories.find(cat => cat.isActive));

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Hero Section with Categories Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Categories</h3>
              <div className="space-y-1 sm:space-y-2">
                {[
                  "Woman's Fashion",
                  "Men's Fashion", 
                  "Electronics",
                  "Home & Lifestyle",
                  "Medicine",
                  "Sports & Outdoor",
                  "Baby's & Toys",
                  "Groceries & Pets",
                  "Health & Beauty"
                ].map((category, index) => (
                  <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer">
                    <span className="text-gray-700">{category}</span>
                    {index < 2 && (
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Hero Banner */}
          <div className="lg:col-span-3">
            <div className="relative bg-black rounded-lg overflow-hidden h-64 sm:h-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=400&fit=crop"
                alt="iPhone 14 Series"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-4 sm:p-6 md:p-8 text-white">
                <div className="flex items-center mb-2">
                  <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
                  <span className="text-xs sm:text-sm">iPhone 14 Series</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Up to 10% off Voucher</h1>
                <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit flex items-center text-sm sm:text-base">
                  Shop Now
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[1, 2, 3, 4, 5].map((dot, index) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${index === 2 ? 'bg-red-500' : 'bg-white bg-opacity-50'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Flash Sales Section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-4 sm:h-6 bg-red-500 rounded"></div>
              <span className="text-xs sm:text-sm text-gray-600">Today's</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Flash Sales</h2>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <CountdownTimer />
              <div className="flex space-x-1 sm:space-x-2">
                <button className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} showDiscount={true} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-4 sm:h-6 bg-red-500 rounded"></div>
              <span className="text-xs sm:text-sm text-gray-600">Categories</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Browse By Category</h2>
            <div className="flex space-x-1 sm:space-x-2">
              <button className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </section>

        {/* Best Selling Products Section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-4 sm:h-6 bg-red-500 rounded"></div>
              <span className="text-xs sm:text-sm text-gray-600">This Month</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Best Selling Products</h2>
            <button className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Music Experience Banner */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center">
                <span className="text-green-500 text-xs sm:text-sm font-medium mb-2">Categories</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Enhance Your Music Experience
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-white bg-opacity-20 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm">
                    25 Hours
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm">
                    96 People
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-white text-xs sm:text-sm">
                    96 Percent
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-600 transition-colors w-fit text-sm sm:text-base">
                  Buy Now
                </button>
              </div>
              <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <img
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop"
                  alt="JBL Speaker"
                  className="w-full max-w-xs sm:max-w-sm h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Explore Products Section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-4 sm:h-6 bg-red-500 rounded"></div>
              <span className="text-xs sm:text-sm text-gray-600">Our products</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Explore Our Products</h2>
            <div className="flex space-x-1 sm:space-x-2">
              <button className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-6 h-6 sm:w-8 sm:h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {exploreProducts.map((product) => (
              <ProductCard key={product.id} product={product} showColors={true} />
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-red-500 text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-medium hover:bg-red-600 transition-colors text-sm sm:text-base">
              View All Products
            </button>
          </div>
        </section>

        {/* New Arrival Section */}
        <section className="mb-8 sm:mb-12">
          <div className="flex items-center space-x-2 mb-4 sm:mb-6">
            <div className="w-1 h-4 sm:h-6 bg-red-500 rounded"></div>
            <span className="text-xs sm:text-sm text-gray-600">Featured</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">New Arrival</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 h-64 sm:h-80 md:h-96">
            {newArrivalBanners.map((banner) => (
              <BannerCard key={banner.id} banner={banner} isLarge={banner.isLarge} />
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
