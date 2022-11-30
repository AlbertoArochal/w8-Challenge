let esto = "pendientes";
let show = "";
export const templateP = `
    <section class = "series-pending">
    <h3> Pending Series </h3>
    <p> You have ${esto} series pending to watch </p>

    <ul class="series-list"> <slot name = "PendingAdd"> </slot></ul>
    <section>
    <slot class = "anchor"> </slot>`;

esto = "vistas";

export const templateW = `
    <section class = "series-watched">
    <h3> Pending Series </h3>
    <p> You have watched ${esto} series</p>
    <ul class="series-list"><slot name = "PendingAdd"> </slot> </ul>
    <section>
    `;

esto = "show";

export const templateL = `

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
