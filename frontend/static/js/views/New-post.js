import Header from "../components/Header.js";
import LoginForm from "../components/LoginForm.js";
import NewPost from "../components/NewPost.js";
import appView from "./app.view.js";

export default class extends appView{
    constructor(params) {
        super(params);
        this.setTitle("new-post");

        this.components = {
            'app-header': Header,
            'app-new-post' : NewPost
        }
    }

    getHtml() {
        return `
            <app-header></app-header>
            <app-new-post></app-new-post>
        `;
    }
}