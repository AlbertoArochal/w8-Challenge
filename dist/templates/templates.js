export let esto = "pendientes";
export const templateP = (callback) => {
    return `                <section class="series">
    <h2 class="section-title">Series list</h2>
    <section class = "series-pending">
    <h3> Pending Series </h3>
    <p> You have ${callback} series pending to watch </p>

    <ul class="series-list"> <slot name = "PendingAdd"> </slot></ul>
    <slot class = "anchor"> </slot>`;
};
export const templateW = (callback) => {
    return `</section>
    <h3> Pending Series </h3>
    <p> You have watched ${callback} series</p>
    <ul class="series-list"><slot name = "PendingAdd"> </slot> </ul>
    <section>
    `;
};
export const templateL = (item) => {
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
