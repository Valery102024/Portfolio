document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star1');
    stars.forEach(star1 => {
        star1.addEventListener('click', () => {
            const value = star1.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('selected');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star2');
    stars.forEach(star2 => {
        star2.addEventListener('click', () => {
            const value = star2.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('selected');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star3');
    stars.forEach(star3 => {
        star3.addEventListener('click', () => {
            const value = star3.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('selected');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star4');
    stars.forEach(star4 => {
        star4.addEventListener('click', () => {
            const value = star4.getAttribute('data-value');
            stars.forEach(s => {
                s.classList.remove('selected');
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('selected');
                }
            });
        });
    });
})
