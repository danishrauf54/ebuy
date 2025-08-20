import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Tom jeff",
      title: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Bob Watson",
      title: "Managing Director",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Smith",
      title: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const statistics = [
    {
      icon: "🏢",
      number: "10.5k",
      text: "Sellers active on our site",
    },
    {
      icon: "💰",
      number: "33k",
      text: "Monthly Product Sale",
    },
    {
      icon: "👥",
      number: "45.5k",
      text: "Customer active on our site",
    },
    {
      icon: "📊",
      number: "25k",
      text: "Annual gross sale in our site",
    },
  ];

  const services = [
    {
      icon: "🚚",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: "🎧",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: "🛡️",
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Top Banner */}
      <div className="px-4 py-2 text-white bg-black sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mx-auto text-xs max-w-7xl sm:text-sm">
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="text-blue-400 cursor-pointer">ShopNow</span>
          </span>
          <div className="flex items-center space-x-4">
            <span>English</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-900">About</li>
          </ol>
        </nav>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Our Story
              </h1>
              <div className="space-y-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                <p>
                  Launched 2015, Exclusives is a global, multi-product online
                  shopping destination with an active presence in USA. Supported
                  by wide network of partners and suppliers, Exclusives has been
                  able to cater to millions of customers across the region.
                </p>
                <p>
                  Exclusives has more than 1 million products to offer, growing
                  at a very fast pace. Exclusives offers a diverse assortment in
                  categories ranging from consumer electronics to fashion.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-center p-8 bg-pink-400 rounded-2xl aspect-square">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 bg-white rounded-full bg-opacity-20">
                    <span className="text-4xl">🛍️</span>
                  </div>
                  <p className="text-lg font-medium">Shopping Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-6">
            {statistics.map((stat, index) => (
  <div
    key={index}
    className={`rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow ${
      "bg-white text-gray-900"
    }`}
  >
    <div className="mb-3 text-3xl sm:text-4xl">{stat.icon}</div>
    <div className="mb-2 text-2xl font-bold sm:text-3xl">
      {stat.number}
    </div>
    <p className="text-xs sm:text-sm">
      {stat.text}
    </p>
  </div>
))}

          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center text-gray-900 sm:text-3xl">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 text-3xl font-bold text-gray-600 bg-gray-200 rounded-full">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>

                <h3 className="mb-1 text-lg font-semibold text-gray-900 sm:text-xl">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm text-gray-600 sm:text-base">
                  {member.title}
                </p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.socialLinks.facebook}
                    className="text-gray-400 transition-colors hover:text-blue-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href={member.socialLinks.twitter}
                    className="text-gray-400 transition-colors hover:text-blue-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href={member.socialLinks.linkedin}
                    className="text-gray-400 transition-colors hover:text-blue-700"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
