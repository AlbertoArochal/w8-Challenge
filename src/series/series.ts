import { Component } from "../Component/Component.js";
import { series, initializeSeries } from "../mocks/series.js";
import { templateL, templateC } from "../templates/templates.js";
export class seriesC extends Component {
    constructor(template: string) {
        super();
        this.template = template;
    }
}
