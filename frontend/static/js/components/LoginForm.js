import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);
        this.name = 'app-login-form'

        
        this.userNickName = ''
        this.userPass = ''
        this.errorMessage = ''

    }
    
    events(){
        let that = this
        return {
            async login(){
                const user = {
                    nickname: that.userNickName,
                    password: that.userPass,
                }

                let response = await fetch('http://localhost:3200/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user),
                });
                const json = await response.json();
                if(response.status == 200){
                    sessionStorage.setItem('token', json.token);
                    return window.location.hash = 'main'
                }else{
                    that.errorMessage = json.message;
                }
                that.render()
                
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
                    <div class="main-authentication-block--form_fields">
                        <form>
                            <input type="text" placeholder="Имя пользователя"  bind='userNickName' value='${this.userNickName}'>
                            <input type="password" placeholder="Пароль"  bind='userPass' value='${this.userPass}'>
                            <input  type="submit" value="Войти" event='login'>
                        </form>
                        <div id="alert_message">${this.errorMessage}</div>
                    </div>
                    <div class="main-authentication-block--form_alternative">
                        <div class="main-authentication-block--form_alternative__line">
                            <span>ИЛИ</span>
                        </div>
                    </div>
                    <div class="main-authentication-block--form_facebook">
                        <a href="#"> <i class="fab fa-facebook-square"></i> Войти через Facebook</a>
                    </div>
                    <div class="main-authentication-block--form_password-recovery">
                        <a href="#">Забыли пароль?</a>
                    </div>
                </div>
                <div class="main-authentication-block--register">
                    <span>У вас ещё нет аккаунта?</span>
                    <a href="#registration">Зарегистрироваться</a>
                </div>
            </div>
        </div>
        `;
    }
}