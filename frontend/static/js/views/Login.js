import LoginForm from "../components/LoginForm.js";
import appView from "./app.view.js";

export default class extends appView{
    constructor(params) {
        super(params);
        this.setTitle("login");

        this.components = {
            'app-login-form' : LoginForm
        }
    }

    getHtml() {
        return `
            <app-login-form></app-login-form>
        `;
    }
}