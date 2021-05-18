export default class {
    constructor(element) {
        this.element = element
    }

    getHtml() {
        return "";
    }

    render(){
        this.element.innerHTML = this.getHtml()

        const events = this.events()
        if(events){
            Object.keys(events).forEach(ev => {
                const button = this.element.querySelectorAll(`[event=${ev}]`)
                if(button){
                    button.forEach(el => {
                        el.addEventListener('click', events[ev]);
                    }) 
                }
               

                
                this.element.querySelectorAll(`[bind]`).forEach(elem => {
                    elem.addEventListener('input', e => {
                        this[e.target.getAttribute('bind')] = e.target.value
                    })
                })

                this.element.querySelectorAll(`[file]`).forEach(elem => {
                    elem.addEventListener('change', events[elem.getAttribute('file')])
                })
            })
        }
    }
}