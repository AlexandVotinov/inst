import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);

        document.addEventListener('click', e => {
            
        })
    }

    message(){
        return alert('header click')
    }

    getHtml() {
        return `
            <div cl="message">HEADER HEADER HEADER HEADER</div>
        `;
    }
}