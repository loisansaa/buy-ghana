import React, { useEffect, useState } from 'react';import { useSearchParams } from 'react-router-dom';import ProductsHelper from '../helpers/productsHelper';
import api from '../api.js';

function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() || '';
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get("/api/v1/products");
      console.log("Products response:", res.data);

      // Support different response shapes
      let productsData = [];
      if (Array.isArray(res.data)) productsData = res.data;
      else if (res.data && Array.isArray(res.data.products)) productsData = res.data.products;
      else if (res.data && Array.isArray(res.data.data)) productsData = res.data.data;

      setAllProducts(productsData);

      // Apply search filter if a query exists, otherwise show all products
      if (query) {
        const qLower = query.toLowerCase();
        const filtered = productsData.filter((p) => {
          const title = (p.title || '').toLowerCase();
          const desc = (p.description || '').toLowerCase();
          const category = (p.category || '').toString().toLowerCase();
          return title.includes(qLower) || desc.includes(qLower) || category.includes(qLower);
        });
        setProducts(filtered);
      } else {
        setProducts(productsData);
      }
    } catch (err) {
      console.error("Products error:", err);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // re-run fetch if query changes and we don't yet have any products
  }, []);

  // filter locally when query or full list changes
  useEffect(() => {
    if (!query) {
      setProducts(allProducts);
      return;
    }

    const qLower = query.toLowerCase();
    const filtered = allProducts.filter((p) => {
      const title = (p.title || '').toLowerCase();
      const desc = (p.description || '').toLowerCase();
      const category = (p.category || '').toString().toLowerCase();
      return title.includes(qLower) || desc.includes(qLower) || category.includes(qLower);
    });

    setProducts(filtered);
  }, [query, allProducts]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen" role="status" aria-live="polite">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-12 w-12 text-[#C72F61]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden>
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <p className="mt-3 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className='flex items-center justify-center h-screen'><h1>I am sorry, something went wrong.</h1></div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {query ? (
        <p className="text-sm text-gray-600 mb-4">Showing <strong>{products.length}</strong> results for "{query}"</p>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center text-gray-600 py-8">{query ? `No products match "${query}"` : 'No products available at the moment.'}</div>
        ) : (
          products.map((product) => (
            <ProductsHelper 
              key={product._id || product.id} 
              image={product.image} 
              title={product.title} 
              price={product.price} 
              category={product.category?.title || product.category || 'Uncategorized'} 
              description={product.description} 
              isInStock={product.isInStock} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Products;
