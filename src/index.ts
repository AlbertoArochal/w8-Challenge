import { seriesListW } from "./seriesList/seriesListW.js";
import { seriesList } from "./seriesListP/seriesListP.js";
import { seriesC } from "./series/series.js";
import { initializeSeries } from "./mocks/series.js";
(() => {
    const series = initializeSeries();
    document.addEventListener("DOMContentLoaded", () => {
        new seriesList().outRender(".series");
        series.forEach((item) => {
            if (item.watched) {
                console.log(item), new seriesC().innRender(".anchor");
            }
        });
        new seriesListW().outRender(".anchor2");
        series.forEach((item) => {
            if (!item.watched) {
                console.log(item), new seriesC().innRender(".anchor");
            }
        });
    });
})();
