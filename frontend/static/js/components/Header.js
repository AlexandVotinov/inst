import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);
        this.name = 'app-header'

        
        this.value = ''
        this.valueList = []

    }
    
    setValues(value){
        this[value] = value
    }

    events(){
        let that = this
        return {
            save(){
                that.valueList.unshift(that.value)
                that.value = ''
                that.render()
            },
            showValue(value){
                that.value = value.target.value
            },
            delete(el){
                const id = el.target.getAttribute('data-id')
                that.valueList.splice(id, 1)
                that.render()
            }
        }
    }

    creteList(){
        let result =''
        this.valueList.forEach((el, i) => {
            result += `<div event='delete' data-id='${i}'>${el}</div>`
        })
        return result
    }
    
    getHtml() {
        return `
            
            <input type='text' bind='showValue' value='${this.value}'>
            <button event='save'>сохранить</button>
            ${this.creteList()}
        `;
    }
}