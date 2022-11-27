import { initializeSeries } from "../mocks/series";
import { Component } from "../Component/Component";


export class seriesList extends Component {

    series : Array<serie>
    constructor(selector:string) {
        super();
        this.template = this.createTemplate();
        this.outRender(selector);
        this.series = initializeSeries()
    }



   const scoreSeries(id:string, data: Partial<serie>) {
    this.series = this.series.map((item) => {item.id === id ? {...item, ...data} : item})
   }
   const deleteSeries(id:string) { item => {
       this.series =this.series.filter(item => item.id !== id)
   }
}

/* const templateP = `
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
 <section>`; */