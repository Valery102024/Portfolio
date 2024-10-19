document.querySelectorAll('.lang').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем переход по ссылке
        document.querySelectorAll('.lang').forEach(l => l.classList.remove('active')); // Убираем выделение
        this.classList.add('active'); // Добавляем выделение к нажатой ссылке
    });
});

// const backToTopButton = document.getElementById('back-to-top');

//         // Добавляем обработчик события прокрутки страницы
//         window.addEventListener('scroll', () => {
//             // Проверяем, если страница прокручена вниз более чем на 200px
//             if (window.scrollY > 200) {
//                 // Показываем кнопку "Вверх"
//                 backToTopButton.classList.add('show');
//             } else {
//                 // Скрываем кнопку "Вверх"
//                 backToTopButton.classList.remove('show');
//             }
//         });

//         // Добавляем обработчик события клика на кнопку "Вверх"
//         backToTopButton.addEventListener('click', () => {
//             // Прокручиваем страницу в начало
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         });
