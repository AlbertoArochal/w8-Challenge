import { seriesListW } from "../seriesList/seriesListW.js";
import { seriesList } from "../seriesListP/seriesListP.js";
import { seriesC } from "../series/series.js";
import { templateL } from "../templates/templates.js";
import { initializeSeries } from "../mocks/series.js";
import { handleStar } from "../helpers/helpers.js";
import { counterW } from "../helpers/helpers.js";

export const app = () => {
    const series = initializeSeries();
    document.addEventListener("DOMContentLoaded", () => {
        new seriesList().outRender(".series");
        series.forEach((item) => {
            if (item.score !== 0) {
                const template = `<li class="serie">
            <img
            class="serie-poster"
            src = '${item.poster}'
            alt = ${item.name} poster 
            />
            <h4 class = 'serie__title'> ${item.name} 
            <p class="serie__info">${item.creator}</p>
            <ul class="score">
            ${handleStar(item.score)}
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
            </li></ul>
            </section>
            <slot class = "anchor"> </slot>
            <slot class = "anchor2"> </slot>`;
                new seriesC(template).innRender(".anchor");
            }
        });
        new seriesListW().outRender(".anchor2");
        series.forEach((item) => {
            let template = `<li class="serie">
            <img
            class="serie-poster"
            src = '${item.poster}'
            alt = ${item.name} poster 
            />
            <h4 class = 'serie__title'> ${item.name} 
            <p class="serie__info">${item.creator}</p>
            <ul class="score">
            ${handleStar(item.score)}
        </ul>
        <i class="fas fa-times-circle icon--delete"></i>
            </li></ul>
            </section>
            <slot class = "anchor"> </slot>
            
            <slot class = "anchor2"> </slot>`;
            if (item.score === 0) {
                new seriesC(template).innRender(".anchor");
            }
        });
    });
};
