"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  FiHome,
  FiBox,
  FiShoppingCart,
  FiHeart,
  FiSettings,
  FiLogOut,
  FiBell,
  FiSearch,
  FiFilter,
  FiStar,
  FiAlertCircle
} from "react-icons/fi";

const DashboardPage = () => {
  const { user, logout, loading: authLoading } = useAuth();
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback products in case API is empty or fails
  const mockProducts = [
    { id: 1, name: "Premium Leather Jacket", price: "$129.00", category: "Clothes", rating: 4.8, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80" },
    { id: 2, name: "Urban White Sneakers", price: "$85.00", category: "Shoes", rating: 4.9, img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80" },
    { id: 3, name: "Classic Denim Shirt", price: "$45.00", category: "Clothes", rating: 4.5, img: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=500&q=80" },
    { id: 4, name: "Red Pro Runner", price: "$110.00", category: "Shoes", rating: 4.7, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
    { id: 5, name: "Beige Wool Sweater", price: "$65.00", category: "Clothes", rating: 4.6, img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&q=80" },
    { id: 6, name: "Modern Brown Loafers", price: "$95.00", category: "Shoes", rating: 4.4, img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?w=500&q=80" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.freeapi.app/api/v1/ecommerce/products?page=1&limit=10");
        const data = await response.json();

        if (data.success && data.data.products.length > 0) {
          // Map API data to our UI structure
          const mappedProducts = data.data.products.map(p => ({
            id: p._id,
            name: p.name,
            price: `$${p.price}`,
            category: "General", // API might have complex category objects, simplifying for now
            rating: 4.5, // Mock rating as API might not provide it
            img: p.mainImage?.url || "https://via.placeholder.com/500x600?text=No+Image"
          }));
          setProducts(mappedProducts);
        } else {
          // If API is empty, use our high-quality mock data as fallback
          console.log("API returned no products, using mock data fallback.");
          setProducts(mockProducts);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Could not connect to the product API.");
        setProducts(mockProducts); // Still show mock data on error so UI isn't broken
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchProducts();
    }
  }, [authLoading]);

  if (authLoading || (loading && products.length === 0)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
          <p className="text-slate-400 font-medium animate-pulse">Fetching latest collection...</p>
        </div>
      </div>
    );
  }

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] border-r border-slate-800 hidden lg:flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            E-Com Dash
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavItem icon={<FiHome />} label="Explore" active />
          <NavItem icon={<FiBox />} label="Shop" />
          <NavItem icon={<FiHeart />} label="Wishlist" />
          <NavItem icon={<FiShoppingCart />} label="My Cart" />
          <NavItem icon={<FiSettings />} label="Settings" />
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={logout}
            className="flex items-center space-x-3 w-full px-4 py-3 text-slate-400 hover:text-white hover:bg-red-500/10 hover:border-red-500/50 border border-transparent rounded-xl transition-all duration-200"
          >
            <FiLogOut />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Header */}
        <header className="h-20 bg-[#1e293b]/50 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search for fashion, accessories, and more..."
              className="w-full bg-[#0f172a] border border-slate-700 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex items-center space-x-6 ml-4">
            <button className="relative text-slate-400 hover:text-white transition-colors">
              <FiBell size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full text-[10px] flex items-center justify-center text-white border-2 border-[#1e293b]">2</span>
            </button>
            <div className="flex items-center space-x-3 border-l border-slate-700 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-white">{user?.username || "Guest User"}</p>
                <button onClick={logout} className="text-[10px] text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-widest">Logout</button>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
                {user?.username?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
          </div>
        </header>

        {/* Dash Content */}
        <div className="p-8 space-y-8">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-2xl flex items-center space-x-3 text-red-400">
              <FiAlertCircle size={20} />
              <p className="font-medium">{error} Showing available collection.</p>
            </div>
          )}

          {/* Welcome Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 p-10 text-white shadow-2xl">
            <div className="relative z-10 max-w-lg">
              <h1 className="text-4xl font-extrabold mb-4 text-white">Latest Arrivals <br />Curated for You 🛍️</h1>
              <p className="text-indigo-100 mb-6 text-lg">Discover the sets that everyone is talking about. Real-time updates from our main store.</p>
              <button className="px-8 py-3 bg-white text-indigo-700 font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-indigo-900/20">
                Shop the Drop
              </button>
            </div>
            {/* Abstract Shapes */}
            <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-10 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl"></div>
          </div>

          {/* Catalog Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 p-1 bg-[#1e293b] border border-slate-800 rounded-2xl w-fit">
              {["All", "Clothes", "Shoes", "General"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeCategory === cat
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 px-6 py-2 bg-[#1e293b] border border-slate-800 rounded-2xl text-slate-300 hover:text-white hover:border-slate-700 transition-all text-sm font-bold">
              <FiFilter />
              <span>Sort & Filter</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-[#1e293b] rounded-3xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-indigo-500/10">
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-900">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/500x600?text=Product+Image"; }}
                  />
                  <div className="absolute top-4 right-4 space-y-2">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-red-500 transition-all">
                      <FiHeart size={18} />
                    </button>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/10">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors truncate pr-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-yellow-500 shrink-0">
                      <FiStar className="fill-current" size={14} />
                      <span className="text-xs font-bold ml-1">{product.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <p className="text-2xl font-black text-white">{product.price}</p>
                    <button className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl transition-all shadow-lg shadow-indigo-900/40">
                      <FiShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!loading && filteredProducts.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-500">
                <FiBox size={40} />
              </div>
              <h3 className="text-xl font-bold text-white">No products found</h3>
              <p className="text-slate-400 max-w-xs mt-2">Try changing your category or search to find what you're looking for.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <button className={`flex items-center space-x-3 w-full px-4 py-4 rounded-2xl transition-all duration-200 ${active
      ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/30 shadow-inner"
      : "text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent"
    }`}>
    <span className={active ? "text-indigo-400" : ""}>{icon}</span>
    <span className="font-bold text-sm tracking-wide text-indigo-400">{label}</span>
  </button>
);

export default DashboardPage;
