export class Component {
    template;
    element;
    constructor() { }
    render(selector) {
        const e = document.querySelector(selector);
        if (e === null)
            return;
        this.element = e;
        this.element.innerHTML = this.template;
    }
    outRender(selector) {
        const e = document.querySelector(selector);
        if (e === null)
            return;
        this.element = e;
        this.element.outerHTML = this.template;
    }
    innRender(selector) {
        const e = document.querySelector(selector);
        if (e === null)
            return;
        this.element = e;
        this.element.outerHTML += this.template;
    }
}
