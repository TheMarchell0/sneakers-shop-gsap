export function createPreloaderFunctional() {
    const body = document.body;
    const preloader = document.querySelector('.js-preloader');
    const content = document.querySelector('.content');

    // Удаляем прелоадер и показываем содержимое после полной загрузки страницы
    window.addEventListener('load', function() {
        preloader.classList.add('hidden'); // Скрываем прелоадер
        body.classList.remove('no-scroll');
    });
}