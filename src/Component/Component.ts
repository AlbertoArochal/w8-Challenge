export abstract class Component {
    template!: string;
    element!: Element;
    constructor() {}

    render(selector: string) {
        const e = document.querySelector(selector);
        if (e === null) return;
        this.element = e;
        this.element.innerHTML = this.template;
    }

    outRender(selector: string) {
        const e = document.querySelector(selector);
        if (e === null) return;
        this.element = e;
        this.element.outerHTML = this.template;
    }

    innRender(selector: string) {
        const e = document.querySelector(selector);
        if (e === null) return;
        this.element = e;
        this.element.outerHTML += this.template;
    }

    createTemplate(template: string) {
        return template;
    }
}
