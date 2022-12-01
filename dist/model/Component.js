export class Component {
    template;
    element;
    render() {
        return this.element;
    }
    innRender(selector) {
        try {
            this.element = this.selectElement(selector);
            this.element.innerHTML += this.template;
        }
        catch (error) {
            this.element = null;
        }
        return this.element;
    }
    outRender(selector) {
        this.element = this.selectElement(selector);
        this.element.outerHTML = this.template;
    }
    catch(error) {
        this.element = null;
        return this.element;
    }
    selectElement(selector) {
        const error = new Error("wrong selector");
        if (!selector)
            throw error;
        const event = document.querySelector(selector);
        if (event === null)
            throw error;
        return event;
    }
}
