"use client";
import React from "react";
import Link from "next/link";
import {
  FiShoppingBag,
  FiArrowRight,
  FiTag,
  FiTrendingUp,
  FiUserPlus
} from "react-icons/fi";

const GuestDashboard = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <h2 className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              E-COM
            </h2>
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-500">
              <a href="#trending" className="hover:text-indigo-600 transition-colors">Trending</a>
              <a href="#offers" className="hover:text-indigo-600 transition-colors">Flash Sale</a>
              <a href="#new" className="hover:text-indigo-600 transition-colors">New Arrivals</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/Login" className="text-sm font-bold text-slate-600 hover:text-indigo-600 px-4 py-2 transition-colors">
              Sign In
            </Link>
            <Link href="/Register" className="px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all">
              Join Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col items-center text-center relative z-10 w-full">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-black uppercase tracking-widest mb-8">
            <FiTag className="mr-2" /> Summer Collection 2026
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
            The Sale You've <br />
            <span className="text-indigo-600">Been Waiting For.</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
            Get up to <span className="text-slate-900 font-bold italic">60% OFF</span> on our most premium collections.
            Limited time offers on shoes, accessories, and fashion.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/Register" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center group">
              Claim My Discount
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 -left-20 w-80 h-80 bg-indigo-200/30 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 flex items-center">
              <FiTrendingUp className="mr-4 text-indigo-600" /> Hot Deals
            </h2>
            <p className="text-slate-500 font-medium">Grab them before they are gone!</p>
          </div>
          <Link href="/Login" className="hidden sm:flex items-center text-indigo-600 font-bold hover:underline">
            View all offers <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <OfferCard
            image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
            category="Footwear"
            title="Pro Runner XT-500"
            originalPrice="$120"
            discountPrice="$89"
            discount="-25%"
          />
          <OfferCard
            image="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"
            category="Outerwear"
            title="Vintage Leather Jacket"
            originalPrice="$299"
            discountPrice="$199"
            discount="-35%"
            badge="Best Seller"
          />
          <OfferCard
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80"
            category="Accessories"
            title="Minimalist Silver Watch"
            originalPrice="$150"
            discountPrice="$75"
            discount="-50%"
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <FiUserPlus size={48} className="mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl font-black mb-6">Start Shopping Today</h2>
          <p className="text-indigo-100 text-lg mb-10 font-medium opacity-80">
            Create an account to track your orders, save items to your wishlist, and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/Register" className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-black hover:bg-slate-100 transition-all shadow-xl">
              Create Free Account
            </Link>
            <Link href="/Login" className="px-8 py-4 bg-indigo-500/50 text-white rounded-2xl font-bold hover:bg-indigo-500 transition-all border border-indigo-400/30">
              Sign In to Your Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const OfferCard = ({ image, category, title, originalPrice, discountPrice, discount, badge }) => (
  <div className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500">
    <div className="relative aspect-square overflow-hidden bg-slate-50">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-6 left-6 flex space-x-2">
        <span className="px-4 py-1.5 bg-red-600 text-white text-xs font-black rounded-full shadow-lg">
          {discount}
        </span>
        {badge && (
          <span className="px-4 py-1.5 bg-slate-900 text-white text-xs font-black rounded-full shadow-lg">
            {badge}
          </span>
        )}
      </div>
    </div>
    <div className="p-8">
      <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">{category}</p>
      <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">{title}</h3>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-slate-400 text-sm line-through font-bold">{originalPrice}</span>
          <span className="text-3xl font-black text-slate-900">{discountPrice}</span>
        </div>
        <Link href="/Login" className="w-14 h-14 bg-slate-100 group-hover:bg-indigo-600 group-hover:text-white rounded-2xl flex items-center justify-center transition-all">
          <FiShoppingBag size={24} />
        </Link>
      </div>
    </div>
  </div>
);

export default GuestDashboard;
