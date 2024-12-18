const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Анна Иванова",
      image: "https://via.placeholder.com/100", // URL фото
      text: "Курс полностью оправдал ожидания. Подача материала отличная!",
    },
    {
      id: 2,
      name: "Максим Петров",
      image: "https://via.placeholder.com/100",
      text: "Я узнал много нового! Рекомендую каждому.",
    },
    {
      id: 3,
      name: "Елена Сидорова",
      image: "https://via.placeholder.com/100",
      text: "Очень полезная информация. Много практических примеров!",
    },
    {
      id: 4,
      name: "Игорь Ковалёв",
      image: "https://via.placeholder.com/100",
      text: "Замечательный опыт! Узнал, как лучше помогать детям.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-10 px-6">
      {/* Заголовок */}
      <h2 className="text-left text-2xl font-bold text-gray-800 mb-6">
        Отзывы
      </h2>

      {/* Сетка отзывов */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            {/* Фото в кружке */}
            <div className="w-20 h-20 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover border-2 border-gray-300"
              />
            </div>
            {/* Имя */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {testimonial.name}
            </h3>
            {/* Текст отзыва */}
            <p className="text-gray-600 italic">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
