export function createGsapAnimations() {

    gsap.defaults({
        duration: 1,
        ease: "power2.out"
    });

    const heroTrigger = createScrollTrigger(".hero"),
        descriptionTrigger = createScrollTrigger(".description"),
        modelsTrigger = createScrollTrigger(".models"),
        topSalesTrigger = createScrollTrigger(".top-sales"),
        discountTrigger = createScrollTrigger(".discount"),
        reviewsTrigger = createScrollTrigger(".reviews"),
        feedbackTrigger = createScrollTrigger(".feedback");

    /*Hero*/

    gsap.from(".hero__content", {
        scrollTrigger: heroTrigger,
        opacity: 0,
        x: -100
    });

    gsap.from(".hero__img", {
        scrollTrigger: heroTrigger,
        opacity: 0,
        y: 100,
        delay: 0.5
    });

    /*Description*/

    gsap.from(".description__content", {
        scrollTrigger: descriptionTrigger,
        opacity: 0,
    });

    gsap.from(".description__content-item:nth-child(1)", {
        scrollTrigger: descriptionTrigger,
        y: 100
    });

    gsap.from(".description__content-item:nth-child(2)", {
        scrollTrigger: descriptionTrigger,
        y: 160,
        duration: 1.6,
    });

    /*Models*/

    gsap.from(".models__title", {
        scrollTrigger: modelsTrigger,
        opacity: 0,
        y: 50
    });

    gsap.from(".models__subtitle", {
        scrollTrigger: modelsTrigger,
        opacity: 0,
        y: 50,
        delay: 0.2,
    });

    gsap.from(".models__list-item", {
        scrollTrigger: modelsTrigger,
        opacity: 0,
        x: 50,
        stagger: 0.6,
        delay: 0.8,
    });

    /*Top-sales*/

    gsap.from(".top-sales__title", {
        scrollTrigger: topSalesTrigger,
        opacity: 0,
        y: 50
    });

    gsap.from(".top-sales__subtitle", {
        scrollTrigger: topSalesTrigger,
        opacity: 0,
        y: 50,
        delay: 0.2,
    });

    gsap.from(".top-sales__list-item", {
        scrollTrigger: topSalesTrigger,
        opacity: 0,
        x: 50,
        stagger: 0.4,
        delay: 0.5,
    });

    /*Discount*/

    gsap.from(".discount__content", {
        scrollTrigger: discountTrigger,
        opacity: 0,
        y: 60,
    });

    gsap.from(".discount__title", {
        scrollTrigger: discountTrigger,
        y: 20,
        opacity: 0,
        delay: 0.5
    });

    gsap.from(".discount__subtitle", {
        scrollTrigger: discountTrigger,
        y: 20,
        opacity: 0,
        delay: 0.7,
    });

    gsap.from(".discount__content-item:nth-child(2) .discount__text", {
        scrollTrigger: discountTrigger,
        y: 20,
        opacity: 0,
        delay: 0.9,
    });

    gsap.from(".discount__button", {
        scrollTrigger: discountTrigger,
        y: 20,
        opacity: 0,
        delay: 1,
    });

    gsap.from(".discount__content-item:nth-child(1) .discount__text", {
        scrollTrigger: discountTrigger,
        y: 20,
        opacity: 0,
        delay: 1.5,
    });

    /*Reviews*/

    gsap.from(".reviews__title", {
        scrollTrigger: reviewsTrigger,
        opacity: 0,
        y: 50
    });

    gsap.from(".reviews__subtitle", {
        scrollTrigger: reviewsTrigger,
        opacity: 0,
        y: 50,
        delay: 0.2,
    });

    gsap.from(".reviews__list-item", {
        scrollTrigger: reviewsTrigger,
        opacity: 0,
        y: 100,
        stagger: 0.2,
    });

    /*Feedback*/

    gsap.from(".feedback__content-item:nth-child(1)", {
        scrollTrigger: feedbackTrigger,
        opacity: 0,
        x: -100
    });

    gsap.from(".feedback__content-item:nth-child(2)", {
        scrollTrigger: feedbackTrigger,
        opacity: 0,
        x: 100
    });
}

function createScrollTrigger(selector) {
    return ScrollTrigger.create({
        trigger: selector,
        start: "top 60%",
        once: true
    });
}
