export default class {
    constructor(params) {
        this.params = params;
    }
    
    setTitle(title) {
        document.title = title;
    }

    getComponents(){
        return this.components
    }

    getHtml() {
        return "";
    }
}