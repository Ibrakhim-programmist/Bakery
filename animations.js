// Функция для запуска анимации "плавного появления"
function fadeIn(element) {
    element.classList.add('fade-in');
    setTimeout(() => {
        element.classList.add('active');
    }, 100); // Задержка в 100 мс для запуска анимации
}

// Функция для запуска анимации "вращения"
function rotate(element) {
    element.classList.add('rotate');
}

// Пример использования
window.onload = () => {
    const fadeElement = document.getElementById('myFadeElement');
    fadeIn(fadeElement);

    const rotateElement = document.getElementById('myRotateElement');
    rotate(rotateElement);
};