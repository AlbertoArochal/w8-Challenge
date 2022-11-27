export class seriesList {




    scoreSeries(id:string, data: Partial<serie>)
}

const templateP = `
<section class = "series-pending">
<h3> Pending Series </h3>
<p> You have ${} series pending to watch </p>

<ul class="series-list"> <slot name = "PendingAdd"> </slot></ul>
 <section>`

 const TemplateW = `
 <section class = "series-watched">
<h3> Pending Series </h3>
<p> You have watched ${} series</p>
<ul class="series-list"><slot name = "PendingAdd"> </slot> </ul>
 <section>`;
