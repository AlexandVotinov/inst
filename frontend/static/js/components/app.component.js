export default class {
    constructor(element) {
        this.element = element;  
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
               

                
                const input = this.element.querySelector(`[bind=${ev}]`);
                if(input){
                    input.addEventListener('input', events[ev])
                }

            })
        }
    }
}