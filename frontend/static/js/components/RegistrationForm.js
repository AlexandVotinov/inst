import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);
        this.name = 'app-registration-form'

        this.userEmail = ''
        this.userName = ''
        this.userNickName = ''
        this.userPass = ''
        this.errorMessage = ''

    }


    events(){
        let that = this
        return {
            async registration(){
                const user = {                    
                    email: that.userEmail,
                    name: that.userName,
                    nickname: that.userNickName,
                    password: that.userPass,
                }

                let response = await fetch('http://localhost:3200/auth/registration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user),
                });
                const json = await response.json();
                if(response.status == 200){
                    return that.navigateTo('login')
                }else{
                    that.errorMessage = json.message;
                }
                that.render()
                
            },
            inputName(value){
                that.userName = value.target.value
            },
            inputPassword(value){
                that.userPass = value.target.value
                
            }
        }
    }

    
    getHtml() {
        return `
        <div class="main-login">
            <div class="main-authentication-block">
                <div class="main-authentication-block--form">
                    <div class="main-authentication-block--form_logo">
                        <img src="/static/img/logo.png" alt="instagram_logo">
                    </div>
                    <div class="main-authentication-block--form_description">Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</div>
                    <button>
                        <i class="fab fa-facebook-square"></i> Войти через Facebook
                    </button>
                    <div class="main-authentication-block--form_alternative">
                        <div class="main-authentication-block--form_alternative__line">
                            <span>ИЛИ</span>
                        </div>
                    </div>
                    <div class="main-authentication-block--form_fields">
                        <form>
                            <input type="email" placeholder="Эл. адрес" value="${this.userEmail}" bind="userEmail">
                            <input type="text" placeholder="Имя и фамилия" value="${this.userName}" bind="userName">
                            <input type="text" placeholder="Имя пользователя" value="${this.userNickName}" bind="userNickName">
                            <input type="password" placeholder="Пароль" value="${this.userPass}" bind="userPass">
                            <input type="submit" value="Регистрация" event="registration">
                        </form>
                        <div id="alert_message">${this.errorMessage}</div>
                    </div>
                    <div class="main-authentication-block--form_attention">
                        Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов cookie.
                    </div>
                </div>
                <div class="main-authentication-block--register">
                    <span>Есть аккаунт?</span>
                    <a href="#login" data-link>Вход</a>
                </div>
            </div>
        </div>
        `;
    }
}