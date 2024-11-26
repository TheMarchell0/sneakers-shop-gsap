export function createAnchorsFunctional() {
    const anchorLinks = document.querySelectorAll('.js-anchor');

    anchorLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            const targetElement = document.getElementById(href.slice(1));
            if (targetElement) {
                const topOffset = targetElement.offsetTop;
                window.scrollTo({
                    top: topOffset,
                    behavior: 'smooth'
                });
            }
        });
    });
}