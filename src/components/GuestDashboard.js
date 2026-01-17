"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

const categories = [
  { name: "Grocery", icon: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=128&h=128&fit=crop&q=80" },
  { name: "Mobiles", icon: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=128&h=128&fit=crop&q=80" },
  { name: "Fashion", icon: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=128&h=128&fit=crop&q=80" },
  { name: "Electronics", icon: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=128&h=128&fit=crop&q=80" },
  { name: "Home & Furniture", icon: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=128&h=128&fit=crop&q=80" },
  { name: "Appliances", icon: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=128&h=128&fit=crop&q=80" },
  { name: "Travel", icon: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=128&h=128&fit=crop&q=80" },
  { name: "Beauty, Toys & More", icon: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=128&h=128&fit=crop&q=80" },
  { name: "Two Wheelers", icon: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=128&h=128&fit=crop&q=80" },
];

const banners = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=400&fit=crop&q=80",
];

const products = [
  {
    id: 1,
    title: "Top Mirrorless Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop&q=70",
    offer: "Shop Now",
    brand: "Canon, Sony & more",
  },
  {
    id: 2,
    title: "Gaming Laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=200&h=200&fit=crop&q=70",
    offer: "From ₹45,000",
    brand: "HP, Acer & more",
  },
  {
    id: 3,
    title: "Best of Trimmers",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=200&h=200&fit=crop&q=70",
    offer: "From ₹599",
    brand: "Philips, Nova & more",
  },
  {
    id: 4,
    title: "Monitors",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop&q=70",
    offer: "From ₹6,599",
    brand: "Samsung, LG & more",
  },
  {
    id: 5,
    title: "Projectors",
    image: "https://images.unsplash.com/photo-1535016120720-40c646bebbcf?w=200&h=200&fit=crop&q=70",
    offer: "From ₹9,999",
    brand: "Wanbo, Epson & more",
  },
  {
    id: 6,
    title: "External Hard Drives",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=200&h=200&fit=crop&q=70",
    offer: "From ₹3,999",
    brand: "Toshiba, Seagate & more",
  },
];

const GuestDashboard = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  return (
    <div className="min-h-screen bg-[#f1f3f6] font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#2874f0] text-white py-3 sticky top-0 z-50">
        <div className="max-w-[1248px] mx-auto flex items-center px-4">
          {/* Logo */}
          <div className="flex flex-col mr-8 leading-none cursor-pointer">
            <span className="text-xl font-bold italic">Flipkart</span>
            <div className="flex items-center text-[11px] italic font-semibold">
              <span className="text-gray-200">Explore</span>
              <span className="text-yellow-400 ml-0.5">Plus</span>
              <img
                src="https://img.icons8.com/color/48/plus--v1.png"
                alt="Plus"
                className="w-3 h-3 ml-0.5"
              />
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-[600px] mx-4 relative group">
            <div className="flex items-center bg-[#f0f5ff] rounded-md transition-all focus-within:bg-white focus-within:shadow-md">
              <div className="pl-4 pr-3 py-2 text-gray-500">
                <FiSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full bg-transparent py-2.5 pr-4 text-[15px] text-gray-800 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex items-center ml-auto space-x-8 text-sm font-semibold">
            <Link
              href="/login"
              className="bg-white text-[#2874f0] px-10 py-1.5 rounded-sm font-bold shadow-sm hover:bg-gray-50 transition-colors inline-block text-center"
            >
              Login
            </Link>
            <div className="flex items-center cursor-pointer">
              <span>Become a Seller</span>
            </div>
            <div className="flex items-center cursor-pointer space-x-1">
              <span>More</span>
              <FiChevronDown />
            </div>
            <div className="flex items-center cursor-pointer space-x-2">
              <FiShoppingCart className="text-lg" />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </header>

      {/* Category Nav */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-[1248px] mx-auto flex justify-between py-3 px-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center cursor-pointer group">
              <img src={cat.icon} alt={cat.name} className="w-16 h-16 object-contain" />
              <span className="text-sm font-semibold mt-1 group-hover:text-[#2874f0]">{cat.name}</span>
            </div>
          ))}
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="p-3">
        <div className="max-w-[1248px] mx-auto relative overflow-hidden group">
          <img
            src={banners[currentBanner]}
            alt="Promotion"
            className="w-full rounded-sm"
          />
          {/* Simple Carousel Controls (Simulated) */}
          <button
            onClick={() => setCurrentBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-6 py-10 rounded-r-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <FiChevronDown className="rotate-90 text-2xl" />
          </button>
          <button
            onClick={() => setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-6 py-10 rounded-l-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <FiChevronDown className="-rotate-90 text-2xl" />
          </button>
        </div>
      </section>

      {/* Deals Section */}
      <section className="p-3">
        <div className="max-w-[1248px] mx-auto bg-white shadow-sm flex flex-col md:flex-row">
          {/* Section Header & Left Promo */}
          <div className="w-full md:w-64 p-6 flex flex-col items-center justify-center text-center border-r border-gray-100">
            <h2 className="text-[22px] font-medium mb-4">Best of Electronics</h2>
            <Link
              href="/login"
              className="bg-[#2874f0] text-white px-5 py-2 rounded-sm text-sm font-bold shadow-md inline-block text-center hover:bg-[#1a5abd] transition-colors"
            >
              VIEW ALL
            </Link>
            <div className="mt-auto pt-8">
              <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=300&h=300&fit=crop&q=80" alt="Promo" className="w-full h-auto" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1 overflow-x-auto">
            <div className="flex p-4 space-x-6 min-w-max">
              {products.map((product) => (
                <div key={product.id} className="w-52 flex flex-col items-center text-center p-4 hover:shadow-xl transition-shadow cursor-pointer border border-transparent hover:border-gray-50">
                  <div className="w-40 h-40 flex items-center justify-center mb-4">
                    <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-sm font-bold mb-1 line-clamp-1">{product.title}</h3>
                  <p className="text-[#388e3c] text-sm font-medium mb-1">{product.offer}</p>
                  <p className="text-gray-500 text-sm">{product.brand}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Banner Section (Mockup) */}
      <section className="p-3">
        <div className="max-w-[1248px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&q=80" alt="Ad 1" className="w-full shadow-sm" />
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&q=80" alt="Ad 2" className="w-full shadow-sm" />
          <img src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500&h=500&fit=crop&q=80" alt="Ad 3" className="w-full shadow-sm" />
        </div>
      </section>

      {/* Footer (Simplified Flipkart style) */}
      <footer className="mt-8 bg-[#172337] text-white pt-10 pb-6">
        <div className="max-w-[1248px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 text-[12px]">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400 font-semibold mb-2">ABOUT</span>
              <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Careers</a>
              <a href="#" className="hover:underline">Flipkart Stories</a>
              <a href="#" className="hover:underline">Press</a>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400 font-semibold mb-2">HELP</span>
              <a href="#" className="hover:underline">Payments</a>
              <a href="#" className="hover:underline">Shipping</a>
              <a href="#" className="hover:underline">Cancellation & Returns</a>
              <a href="#" className="hover:underline">FAQ</a>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400 font-semibold mb-2">POLICY</span>
              <a href="#" className="hover:underline">Return Policy</a>
              <a href="#" className="hover:underline">Terms Of Use</a>
              <a href="#" className="hover:underline">Security</a>
              <a href="#" className="hover:underline">Privacy</a>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-400 font-semibold mb-2">SOCIAL</span>
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">YouTube</a>
            </div>
            <div className="flex flex-col space-y-2 lg:col-span-2 border-l border-gray-600 pl-8">
              <span className="text-gray-400 font-semibold mb-2">Registered Office Address:</span>
              <p>Flipkart Internet Private Limited,</p>
              <p>Buildings Alyssa, Begonia & </p>
              <p>Clove Embassy Tech Village,</p>
              <p>Outer Ring Road, Devarabeesanahalli Village,</p>
              <p>Bengaluru, 560103,</p>
              <p>Karnataka, India</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center text-[14px]">
            <div className="flex space-x-6 items-center mb-4 md:mb-0">
              <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
                <FiArrowRight className="rotate-180" />
                <span>Become a Seller</span>
              </span>
              <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
                <span>Advertise</span>
              </span>
              <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
                <span>Gift Cards</span>
              </span>
              <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-400">
                <span>Help Center</span>
              </span>
            </div>
            <div className="text-gray-300">
              © 2007-2026 Flipkart.com
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestDashboard;
