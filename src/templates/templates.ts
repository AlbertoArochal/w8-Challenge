export let esto = "pendientes";
export type movie = {
    id: number;
    name: string;
    creator: string;
    year: number;
    poster: string;
    watched: boolean;
    score: string;
    emmies: number;
};
export const templateP = () => {
    return `                <section class="series">
    <h2 class="section-title">Series list</h2>
    <section class = "series-pending">
    <h3> Pending Series </h3>
    <p> You have ${esto} series pending to watch </p>

    <ul class="series-list"> <slot name = "PendingAdd"> </slot></ul>
    <slot class = "anchor"> </slot>`;
};

export const templateW = () => {
    return `</section>
    <h3> Pending Series </h3>
    <p> You have watched ${esto} series</p>
    <ul class="series-list"><slot name = "PendingAdd"> </slot> </ul>
    <section>
    `;
};

export const templateL = (item: object) => {
    return `

<li class="serie">
<img
class="serie-poster"
src = '${item}'
alt = ${item} poster 
/>
<h4 class = 'serie__title'> ${item} 
<p class="serie__info">${item}</p>
</li></ul>

<slot class = "anchor"> </slot>
<slot class = "anchor2"> </slot>`;
};

export const templateContainer = () => {
    return `
    <section class="series">
        <h2 class="section-title">Series list</h2>
        <section class="series-pending"></section>
        <section class="series-watched"></section>
    </section>
    `;
};
