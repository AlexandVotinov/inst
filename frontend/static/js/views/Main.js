import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import appView from "./app.view.js";

export default class extends appView{
    constructor(params) {
        super(params);
        this.setTitle("main");

        this.components = {
            'app-header' : Header,
            'app-footer': Footer
        }
    }

    getHtml() {
        return `
            <main>
                <app-header></app-header>
                <h1>Лента</h1>
            </main>
            <app-footer></app-footer>
        `;
    }
}