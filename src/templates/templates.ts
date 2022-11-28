const esto = "placeholder";

export const templateP = `
    <section class = "series-pending">
    <h3> Pending Series </h3>
    <p> You have ${esto} series pending to watch </p>

    <ul class="series-list"> <slot name = "PendingAdd"> </slot></ul>
    <section>
    <slot class = "anchor"> </slot>`;

export const templateW = `
    <section class = "series-watched">
    <h3> Pending Series </h3>
    <p> You have watched ${esto} series</p>
    <ul class="series-list"><slot name = "PendingAdd"> </slot> </ul>
    <section>`;

export const templateL = `

<li class="serie">
<img
class="serie-poster"
src = ${esto}
alt = ${esto} poster 
/>
<h4 class = 'serie__title'> ${esto} 
</li></ul>`;
