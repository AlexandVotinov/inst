import RegistrationForm from "../components/RegistrationForm.js";
import appView from "./app.view.js";

export default class extends appView{
    constructor(params) {
        super(params);
        this.setTitle("registration");

        this.components = {
            'app-registration-form' : RegistrationForm
        }
    }

    getHtml() {
        return `
            <app-registration-form></app-registration-form>
        `;
    }
}