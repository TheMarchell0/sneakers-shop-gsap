export function createAnchorsFunctional() {
    const anchorLinks = document.querySelectorAll('.js-anchor');

    anchorLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('anchor-to');
            const targetElement = document.querySelector(`#${href}`);
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