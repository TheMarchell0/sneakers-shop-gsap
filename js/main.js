import {createFormValidation} from "./functions/createFormValidation.js";
import {createAnchorsFunctional} from "./functions/createAnchorsFunctional.js";

document.addEventListener("DOMContentLoaded", function () {
    createAnchorsFunctional();
    createFormValidation();
});