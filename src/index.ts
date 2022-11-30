import { seriesListW } from "./seriesList/seriesListW.js";
import { seriesList } from "./seriesListP/seriesListP.js";
import { templateP } from "./templates/templates.js";
import { seriesC } from "./series/series.js";
import { series, initializeSeries } from "./mocks/series.js";
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        new seriesList().outRender(".series");
        const seriesP = initializeSeries();
        seriesP.forEach((item) => {
            if (item.watched) {
                console.log(item), new seriesC().innRender(".anchor");
            }
        });
        new seriesListW().render(".anchor2");
        const seriesW = initializeSeries();
        seriesW.forEach((item) => {
            if (!item.watched) {
                console.log(item), new seriesC().innRender(".anchor");
            }
        });
    });
})();
