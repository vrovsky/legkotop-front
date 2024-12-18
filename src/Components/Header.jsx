function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Логотип (слева) */}
          <div className="text-gray-800 font-bold">Legko.top</div>
          {/* Навигация и кнопка "Вход" (справа) */}
          <div className="flex items-center">
            {/* Навигация */}
            <div className="flex items-center space-x-10 mr-40">
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Курсы
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                База Знаний
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Услуги
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Клуб
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500">
                Контакты
              </a>
            </div>
            {/* Кнопка "Вход" */}
            <a
              href="#"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Вход
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
