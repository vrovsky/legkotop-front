function CategorySelector() {
  return (
    <>
      <div className="w-full bg-gray-50 py-10 px-4">
        {/* Заголовок */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          ВЫБЕРИТЕ КАТЕГОРИЮ
        </h2>

        {/* Кнопки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          <button className="w-full py-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
            Беременность
          </button>
          <button className="w-full py-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
            0 - 3
          </button>
          <button className="w-full py-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
            4 - 7
          </button>
          <button className="w-full py-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
            8 - 11
          </button>
          <button className="w-full py-4 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition">
            12 +
          </button>
        </div>
      </div>
    </>
  );
}

export default CategorySelector;
