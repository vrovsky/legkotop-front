function VisualTopics() {
  return (
    <>
      <div className="w-full bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-3 grid-rows-3 gap-6">
          {/* Левая картинка */}
          <div className="col-start-1 row-span-3 flex items-center justify-center">
            <img
              src="/path-to-image-activity.jpg"
              alt="Двигательная активность детей"
              className="w-64 h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Центральная верхняя картинка */}
          <div className="col-start-2 row-start-1 flex items-center justify-center">
            <img
              src="/path-to-image-handling.jpg"
              alt="Хэндлинг"
              className="w-64 h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Центральная нижняя картинка */}
          <div className="col-start-2 row-start-3 flex items-center justify-center">
            <img
              src="/path-to-image-gv.jpg"
              alt="ГВ и Прикорм"
              className="w-64 h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Правая картинка */}
          <div className="col-start-3 row-span-3 flex items-center justify-center">
            <img
              src="/path-to-image-specialists.jpg"
              alt="Для специалистов"
              className="w-64 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualTopics;
