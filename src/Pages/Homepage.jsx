import React, { useEffect, useState } from 'react';
import hero1 from '../assets/hero-1.jpg';
import api from '../api.js';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx';

function Homepage() {
  const { addItem } = useCart();
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState(null);
  const [productsError, setProductsError] = useState(null);

  const fetchCategories = async () => {
    setCategoriesLoading(true);
    setCategoriesError(null);
    try {
      const res = await api.get("/api/v1/categories");
      console.log("Categories response:", res.data);
      const categoriesData = res.data.categories || [];
      setCategories(categoriesData.slice(0, 6));
    } catch (err) {
      console.error("Categories error:", err);
      setCategoriesError("Failed to load categories");
    } finally {
      setCategoriesLoading(false);
    }
  };

  const fetchProducts = async () => {
    setProductsLoading(true);
    setProductsError(null);
    try {
      const res = await api.get("/api/v1/products");
      console.log("Products response:", res.data);
      const productsData = res.data.products || [];
      setFeaturedProducts(productsData.slice(0, 3));
    } catch (error) {
      console.error("Products error:", error);
      setProductsError("Failed to load products");
    } finally {
      setProductsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-[60vh] md:min-h-[85vh] bg-cover bg-center flex items-center justify-center text-center px-4 py-12 md:py-0 relative"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 bg-black/40 backdrop-blur-sm p-8 md:p-16 rounded-2xl max-w-4xl">
          <h3 className="text-white text-sm md:text-base uppercase tracking-widest mb-3 font-light">
            Find the perfect gift
          </h3>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DISCOVER AFRICAN ART
          </h1>
          <p className="text-white text-lg sm:text-xl mb-8 font-light">
            Real people, quality art, affordable prices
          </p>
          <Link to="/products">
  <button className="bg-[#C72F61] hover:bg-[#A02550] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
    Shop Now
  </button>
</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our curated collection of African art and crafts
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {categoriesLoading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[260px] md:min-w-0 flex-shrink-0 snap-start bg-white rounded-xl shadow-md overflow-hidden p-5 animate-pulse"
                aria-hidden
              >
                <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden rounded-md mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              </div>
            ))
          ) : categoriesError ? (
            <div className="col-span-full text-center text-red-600">
              {categoriesError} <button onClick={fetchCategories} className="ml-3 underline">Retry</button>
            </div>
          ) : (
            categories.map((category) => (
              <div
                key={category._id}
                className="min-w-[260px] md:min-w-0 flex-shrink-0 snap-start group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked favorites from our artisan community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsLoading ? (
              <div className="col-span-full flex items-center justify-center py-12" role="status" aria-live="polite">
                <div className="flex flex-col items-center">
                  <svg className="animate-spin h-12 w-12 text-[#C72F61]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  <p className="mt-3 text-gray-600">Loading products...</p>
                </div>
              </div>
            ) : productsError ? (
              <div className="col-span-full text-center text-red-600">
                {productsError} <button onClick={fetchProducts} className="ml-3 underline">Retry</button>
              </div>
            ) : (
              featuredProducts.map((product) => (
                <div
                  key={product._id}
                  className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                >
                  <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-[#C72F61] font-bold text-xl">${product.price}</p>
                    <button onClick={() => addItem(product)} className="bg-[#C72F61] hover:bg-[#A02550] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="text-center mt-10">
            <Link to="/products"><button className="bg-white border-2 border-[#C72F61] text-[#C72F61] hover:bg-[#C72F61] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              View All Products
            </button></Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#C72F61] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Support Local Artisans
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Every purchase directly supports talented African artists and their communities
          </p>
          <Link to="/about"><button className="bg-white text-[#C72F61] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Learn Our Story
          </button></Link>
        </div>
      </section>
    </div>
  );
}

export default Homepage;