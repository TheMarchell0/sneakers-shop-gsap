export function createPreloaderFunctional() {
    const body = document.body;
    const preloader = document.querySelector('.js-preloader');

    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
        body.classList.remove('no-scroll');
    });
}