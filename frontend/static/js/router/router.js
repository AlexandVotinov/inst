import Main from "../views/Main.js";
import Profile from "../views/Profile.js";



const app = document.getElementById('app');

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
    const components = view.getComponents()

    app.innerHTML = view.getHtml()


    Object.keys(components).forEach(key => {
        document.querySelectorAll(key).forEach(el => {
            const component = new components[key]

            el.innerHTML = component.getHtml()
        })
    })


}

export {router}








