import React,{useEffect,useState} from 'react';
import hero1 from '../assets/hero-1.jpg';

function Homepage() {
const [categories, setCategories] = useState(null);
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
      setCategories(data);
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
    <section>
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="bg-black/50 p-6 rounded-lg">
          <h3 className="text-white text-sm uppercase tracking-widest mb-2">
            Find the perfect gift
          </h3>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            DISCOVER AFRICAN ART
          </h1>
          <p className="text-white text-lg">
            Real people, quality art, affordable prices
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1>
          Categories
        </h1>
        
        <div className="overflow-x-auto overflow-y-hidden no-scrollbar -mx-4 px-4 py-6">
          <div className="flex items-start gap-6 snap-x snap-mandatory">
            {categories?.map((category) => (
              <div
                key={category.id}
                className="flex-none w-64 sm:w-72 md:w-80 h-48 bg-white rounded-lg shadow-md overflow-hidden p-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 snap-center"
                role="button"
                tabIndex={0}
                aria-label={category.title}
              >
                <div className="h-28 md:h-32 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden">
                  <img src={category.image} alt={category.title} className="max-w-full max-h-full object-contain" />
                </div>

                <h2 className="mt-3 text-sm md:text-base font-semibold text-gray-800 truncate text-center">{category.title}</h2>

              </div>
            ))}
          </div>
        </div>
        </div>

      </div>
      <div>
        <h1 className="text-center text-2xl font-bold mb-4">Featured Products</h1>
      </div>
    </section>
    
  );
}

export default Homepage;
