export default class {
    constructor(params) {
        this.params = params;
    }
    
    setTitle(title) {
        document.title = title;
    }


    getHtml() {
        return "";
    }

    render(){
        app.innerHTML = this.getHtml()
        this.renderComponents()
    }

    renderComponents(){
        Object.keys(this.components).forEach(key => {
            document.querySelectorAll(key).forEach(el => {
                const component = new this.components[key](el)
                component.render()
                    // const events = component.events()
                    // if(events){
                    //     Object.keys(events).forEach(ev => {
                    //         document.querySelectorAll(`[event=${ev}]`).forEach(elEv => {
                    //             elEv.addEventListener('click', events[ev])
                    //         })
                    //     })
                    // }
            })
        })
    }
}