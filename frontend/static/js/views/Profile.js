import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import Publications from "../components/Publications.js";
import UserMenu from "../components/UserMenu.js";
import appView from "./app.view.js";

export default class extends appView{
    constructor(params) {
        super(params);
        this.setTitle("profile");

        this.components = {
            'app-header'   : Header,
            'app-user-menu': UserMenu,
            'app-publications': Publications,
            'app-footer': Footer
        }
    }

    getHtml() {
        return `
            <main>
                <app-header></app-header>
                <app-user-menu></app-user-menu>
                <app-publications></app-publications>
            </main>
            <app-footer></app-footer>
        `;
    }
}