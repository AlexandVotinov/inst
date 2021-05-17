import Main from "../views/Main.js";
import Profile from "../views/Profile.js";



const app = document.getElementById('app');

let listenerlist = [];

const views = {
    'main': Main,
    'profile' : Profile
}

function router(){
    locationHashChanged();
    window.onhashchange = locationHashChanged;
}

function locationHashChanged() {
    const hash = location.hash.slice(1)

    const view = new views[hash]();

    view.render()


    


}

export {router}








