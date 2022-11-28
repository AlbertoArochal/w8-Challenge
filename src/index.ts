import { seriesListW } from "./seriesList/seriesListW.js";
import { seriesList } from "./seriesListP/seriesList.js";
import { templateP } from "./templates/templates.js";

(() => {
    document.addEventListener("DOMContentLoaded", () => {
        new seriesList().outRender(".series");
        new seriesListW().render(".anchor");
    });
})();
