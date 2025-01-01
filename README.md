npm i - установка node module
npm run dev - запустить проект
npm install react-router-dom - для установки зависимости

src/
├── assets/ // Статические файлы (изображения, шрифты, CSS)
├── components/ // Переиспользуемые компоненты
├── pages/ // Страницы приложения
├── hooks/ // Кастомные хуки
├── context/ // Контекст (React Context API)
├── types/ // Общие типы и интерфейсы TypeScript
├── utils/ // Вспомогательные функции
├── services/ // API-сервисы или взаимодействие с сервером
├── App.tsx // Главный компонент
├── index.tsx // Точка входа в приложение

Работа с react-router-dom
├──1.Для того что бы приложение работала с router-dom нужно оборачивать все в BrowserRouter в пративном случае нечего работать не будет
├──2.Как строится переход по страницам
├──3.BrowserRouter > Header, Routes > Rote path="/" element={<element/>}
├──4.Реализация перехода 5.<Link to="/">Home</Link>
