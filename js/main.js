import {createPreloaderFunctional} from "./functions/createPreloaderFunctional.js";
import {createGsapAnimations} from "./functions/createGsapAnimations.js";
import {createFormValidation} from "./functions/createFormValidation.js";
import {createAnchorsFunctional} from "./functions/createAnchorsFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    createPreloaderFunctional();

    if (innerWidth > 1024) {
        createGsapAnimations();
    }

    createAnchorsFunctional();
    createFormValidation();
});