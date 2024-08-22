const CategoryCard = ({ title, image }) => {
  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 2) {
      return `${words[0]} ${words[1]}...`;
    }
    return title;
  };

  return (
    <div className="p-4 w-full sm:w-48 md:w-56 border border-gray-200 rounded-lg flex flex-col items-center bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 mx-auto mb-1 sm:mb-0">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-1 flex items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-800 truncate">{truncateTitle(title)}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
