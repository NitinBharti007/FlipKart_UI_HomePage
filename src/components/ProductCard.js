const ProductCard = ({ title, price, image }) => (
  <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform w-full sm:w-60 md:w-72 mx-auto mb-4">
    <div className="relative w-full h-40 sm:h-48 md:h-56 mb-3 overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
    <h3 className="font-bold text-base sm:text-lg text-gray-800 truncate">{title}</h3>
    <p className="text-gray-600 mt-1 text-sm sm:text-base">${price}</p>
    <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-lg transition duration-300 w-full">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
