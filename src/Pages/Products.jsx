import React,{ useEffect, useState} from 'react'
import ProductsHelper from '../helpers/productsHelper';

function Products() {
const [products, setProducts] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  console.log("Fetching products...");
}, []);
useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

if (loading) {
  return <div className="flex items-center justify-center h-screen"><p>Loading...</p></div>;
}
if (error) {
  return <div className='flex items-center justify-center h-screen'><h1>I am sorry, something might have gone wrong.</h1></div>;
}

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => {
          return(
            <ProductsHelper key={product.id} image={product.image} title={product.title} price={product.price} category={product.category} description={product.description} isInStock={product.isInStock} />
          )
        }
          
        )}
      </div>
    </div>
  )
}

export default Products