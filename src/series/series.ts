import { Component } from "../Component/Component.js";
import { series, initializeSeries } from "../mocks/series.js";
import { templateL, initializeT } from "../templates/templates.js";
export class seriesC extends Component {
    constructor() {
        super();
    }
    template = templateL();
}

/*HandleStar = (selector: string) => {
        const ranker = document.querySelectorAll(selector);
        ranker.forEach((item) =>
            item.addEventListener(click, () => {
                let rank = ranker.innerHTML.split("/");
            })
        );
    };*/
