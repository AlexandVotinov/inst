import Header from "../components/Header.js";
import appView from "./app.view.js";

export default class extends appView{
    constructor(params) {
        super(params);
        this.setTitle("profile");

        this.components = {
            'app-header' : Header
        }
    }

    getHtml() {
        return `
            <app-header></app-header>
            <h1>profile page</h1>
        `;
    }
}