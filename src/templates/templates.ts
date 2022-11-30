let esto = "pendientes";
export const templateP = () => {
    return `
    <section class = "series-pending">
    <h3> Pending Series </h3>
    <p> You have ${esto} series pending to watch </p>

    <ul class="series-list"> <slot name = "PendingAdd"> </slot></ul>
    <section>
    <slot class = "anchor"> </slot>`;
};

export const templateW = () => {
    return `
    <section class = "series-watched">
    <h3> Pending Series </h3>
    <p> You have watched ${esto} series</p>
    <ul class="series-list"><slot name = "PendingAdd"> </slot> </ul>
    <section>
    `;
};

export const templateL = () => {
    return `

<li class="serie">
<img
class="serie-poster"
src = ''
alt = ${esto} poster 
/>
<h4 class = 'serie__title'> ${esto} 
<p class="serie__info">${esto}</p>
</li></ul>

<slot class = "anchor"> </slot>
<slot class = "anchor2"> </slot>`;
};
