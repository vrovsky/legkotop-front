function HeroSection() {
  return (
    <>
      <div className="w-full bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Левая часть: текст и кнопка */}
          <div className="flex-1">
            {/* Заголовок */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Заголовок</h1>
            {/* Подзаголовок */}
            <p className="text-lg text-gray-600 mb-6">
              Это подзаголовок, который объясняет основную суть страницы и
              блаблабла.
            </p>
            {/* Кнопка */}
            <a
              href="/path-to-file"
              download
              className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Скачать таблицу
            </a>
          </div>

          {/* Правая часть: изображение */}
          <div className="flex-1 flex justify-end">
            <img
              src="https://via.placeholder.com/400"
              alt="Описание изображения"
              className="w-80 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
