import Login from "../views/Login.js";
import Main from "../views/Main.js";
import NewPost from "../views/New-post.js";
import Profile from "../views/Profile.js";
import Registration from "../views/Registration.js";
import { checkLogin } from "./auth.js";



const app = document.getElementById('app');

let listenerlist = [];

const views = {
    'main'        : Main,
    'profile'     : Profile,
    'login'       : Login,
    'registration': Registration,
    'new-post'    : NewPost
}

function router(){
    locationHashChanged();
    window.onhashchange = locationHashChanged;
}

function locationHashChanged() {
    let hash = location.hash.slice(1) || 'main'

    if(!views[hash]){
        hash = 'profile'
    }
    
    let view = new views[hash]();

    checkLogin()
    view.render()
    
}

export {router}








