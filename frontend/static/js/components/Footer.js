import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);

        this.name = 'app-footer'
    }

    events(){
        let that = this
        return {}
    }
   
    
    getHtml() {
        return `
        <footer>
            <div>
                <span>Информация</span>
                <span>Блог</span>
                <span>Вакансии</span>
                <span>Помощь</span>
                <span>API</span>
                <span>Конфиденциальность</span>
                <span>Условия</span>
                <span>Популярные аккаунты</span>
                <span>Хэштэги</span>
                <span>Места</span>
            </div>
            <div>
                <span>Русский</span>
                <span>© Instagram от Facebook, 2021</span>
            </div>
        </footer>
        `;
    }
}