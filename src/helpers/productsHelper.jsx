import { useCart } from '../Context/CartContext.jsx';

function ProductsHelper({ _id, id, image, title, description, isInStock, price }) {
  const { addItem } = useCart();

  const product = { _id, id, image, title, description, isInStock, price };

  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
      <div className="relative h-48 md:h-56 lg:h-64 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
        <div className="absolute top-3 right-3 text-xs bg-[#C72F61] text-white rounded px-3 py-1">{isInStock ? 'In stock' : 'Out of stock'}</div>
      </div>

      <div className="px-4 py-3 flex-1 flex flex-col">
        <h3 className="font-medium text-base mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-3 line-clamp-3">{description}</p>
        <div className="mt-auto flex items-center justify-between text-gray-900">
          <span className="text-lg font-semibold">GHS{price}</span>
          <button onClick={() => addItem(product)} className="bg-[#C72F61] hover:bg-[#A02550] text-white px-4 py-1 rounded-lg text-sm font-medium transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductsHelper