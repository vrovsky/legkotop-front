function RecommendedContent() {
  return (
    <>
      <div className="w-full bg-gray-50 py-10 px-6">
        {/* Заголовок */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          РЕКОМЕНДУЕМ ОЗНАКОМИТЬСЯ
        </h2>

        {/* Контейнер для видео и ссылок */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
          {/* Видео (1/3 ширины) */}
          <div className="flex-[1]">
            <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-lнедоступноg">
              {/* Плейсхолдер для видео */}
              <iframe
                src="https://www.youtube.com/embed/placeholder"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Ссылки (2/3 ширины) */}
          <div className="flex-[2]">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-lg text-blue-500 hover:text-blue-600 transition"
                >
                  Статья 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-blue-500 hover:text-blue-600 transition"
                >
                  Статья 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg text-blue-500 hover:text-blue-600 transition"
                >
                  Статья 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendedContent;
