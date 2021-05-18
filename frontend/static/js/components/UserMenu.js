import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);
        this.name = 'app-user-menu'

        this.userNickName = ''
        this.userName = ''
        this.userPublications = ''
        this.userSubscribers = ''
        this.userSubscriptions = ''
        this.userMain;

        this.getPerson()
    }


    async getPerson(){
        const token = sessionStorage.getItem('token')
        const id = location.hash.slice(1)

        let response = await fetch('http://localhost:3200/person/page', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, token: token}),
        });
        const json = await response.json();
    
        if(response.status == 200){
            this.userNickName = json.nickname
            this.userName = json.name
            this.userPublications = json.publications || 0
            this.userSubscribers =json.subscribers || 0
            this.userSubscriptions = json.subscriptions || 0
            this.userMain = json.main || 'hide'

        }
        this.render() 
    }


    events(){
        let that = this
        return {}
    }
    
    getHtml() {
        return `
        <div class="main-person">
            <div class="main-person-photo">
                <img src="https://sun9-75.userapi.com/impf/c622227/v622227253/19005/7IhnNcSfFuY.jpg?size=563x1000&quality=96&sign=80d93e2dda366f6bad1e65b9f3123cd5&type=album" alt="Alexander">
            </div>
            <div class="main-person-info">
                <div class="main-person-info_header">
                    <div class="main-person-info_nickname">${this.userNickName}</div>
                    <div class="main-person-info_rewrite-profile">
                        <button class="main-person-info_rewrite-profile__button ${this.userMain}">Редактировать профиль</button>
                    </div>
                </div>
                <div class="main-person-info_counter">
                    <div class="main-person-info_counter_publications">
                        <span>${this.userPublications}</span>
                        <span>публикаций</span>
                    </div>
                    <div class="main-person-info_counter_subscribers">
                        <a href="#">
                            <span>${this.userSubscribers}</span>
                            <span>подписчиков</span>
                        </a>
                    </div>
                    <div class="main-person-info_counter_subscriptions">
                        <a href="#">
                            <span>${this.userSubscriptions}</span>
                            <span>подписок</span>
                        </a>
                    </div>
                </div>
                <div class="main-person-info_additional">
                    <div class="main-person-info_additional_name">${this.userName}</div>
                </div>
            </div>
        </div>
        <div class="main-nav">
            <div class="main-nav_publications active">публикации</div>
            <div class="main-nav_IGTV">igtv</div>
            <div class="main-nav_saved">сохраненное</div>
            <div class="main-nav_marks">отметки</div>
        </div>
        `;
    }
}