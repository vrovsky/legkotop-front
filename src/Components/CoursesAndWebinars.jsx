import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CoursesAndWebinars = () => {
  return (
    <div className="w-full bg-gray-50 py-10 px-6">
      {/* Заголовок */}
      <h2 className="text-left text-2xl font-bold text-gray-800 mb-6">
        Курсы и Вебинары
      </h2>

      {/* Карусель */}
      <Swiper
        modules={[Autoplay, Navigation]} // Подключаем Autoplay и Navigation
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{
          delay: 2000, // Задержка в миллисекундах (2 секунды)
          disableOnInteraction: false, // Продолжает автопрокрутку после взаимодействия
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold">
            Коррекция Ассиметрии
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold">
            Хендлинг
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold">
            Не Сидит и Не Ползает
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold">
            Плейсхолдер 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold">
            Плейсхолдер 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 text-white py-8 px-6 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold">
            Плейсхолдер 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CoursesAndWebinars;
