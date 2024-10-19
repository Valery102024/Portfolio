// // Получите элементы слайдера
// const slider = document.querySelector('.slider');
// const sliderTrack = document.querySelector('.slider-track');
// const sliderItems = document.querySelectorAll('.slider-item');
// const prevArrow = document.querySelector('.slider-prev');
// const nextArrow = document.querySelector('.slider-next');

// // Установите ширину элемента слайдера
// const sliderItemWidthPx = sliderItems[0].offsetWidth + 'px';

// // Установите ширину трека слайдера
// sliderTrack.style.width = `${sliderItemWidthPx * sliderItems.length}`;

// // Добавьте переменную для хранения текущего индекса слайда
// let currentIndex = 1;

// // Добавьте функцию для перемещения трека слайдера
// function moveSliderTrack(direction) {
//     // Определите ширину перемещения
//     const translateX = direction === 'next' ? `-${sliderItemWidthPx}` : `${sliderItemWidthPx}`;
//     if (currentIndex > 0 && currentIndex < sliderItems.length - 1) {
//         // Промежуточный слайд, добавьте задержку анимации
//         setTimeout(() => {
//             sliderTrack.style.transform = `translateX(${translateX})`;
//         }, 500);
//     } else {
//         sliderTrack.style.transform = `translateX(${translateX})`;
//     }
//     // Переместите трек слайдера
//     sliderTrack.style.transform = `translateX(${translateX})`;

//     // Обновите текущий индекс слайда
//     currentIndex = direction === 'next' ? (currentIndex + 1) % sliderItems.length : (currentIndex - 1 + sliderItems.length) % sliderItems.length;

//     // Добавьте анимацию перехода между слайдами
//     sliderTrack.style.transition = 'transform 10s ease-in-out';
//     setTimeout(() => {
//         sliderTrack.style.transition = '';
//     }, 500);
// }

// // Добавьте слушатели событий к стрелкам
// prevArrow.addEventListener('click', (event) => {
//     event.preventDefault();
//     moveSliderTrack('prev');
// });

// nextArrow.addEventListener('click', (event) => {
//     event.preventDefault();
//     moveSliderTrack('next');
// });
// Получите элементы слайдера
const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider-track');
const sliderItems = document.querySelectorAll('.slider-item');
const prevArrow = document.querySelector('.slider-prev');
const nextArrow = document.querySelector('.slider-next');

// Установите ширину элемента слайдера
const sliderItemWidth = sliderItems[0].offsetWidth;

// Установите ширину трека слайдера
sliderTrack.style.width = `${sliderItemWidth * sliderItems.length}px`;

// Добавьте переменную для хранения текущего индекса слайда
let currentIndex = 0;

// Добавьте функцию для перемещения трека слайдера
function moveSliderTrack(direction) {
    // Обновите текущий индекс слайда
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % sliderItems.length;
    } else {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    }

    // Определите смещение для перемещения
    const translateX = -currentIndex * sliderItemWidth;

    sliderTrack.style.transition = 'transform 0.1s ease-in-out';// Добавьте анимацию перехода между слайдами

    // Переместите трек слайдера
    sliderTrack.style.transform = `translateX(${translateX}px)`;
}

// Добавьте слушатели событий к стрелкам
prevArrow.addEventListener('click', (event) => {
    event.preventDefault();
    moveSliderTrack('prev');
});

nextArrow.addEventListener('click', (event) => {
    event.preventDefault();
    moveSliderTrack('next');
});
