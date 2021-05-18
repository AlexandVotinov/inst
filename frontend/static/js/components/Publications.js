import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);

        this.name = 'app-publications'

        this.publications = [
            {
                name: 'india',
                like: '1',
                comment: '1'
            },
            {
                name: 'belarus',
                like: '2',
                comment: '2'
            },
            {
                name: 'russia',
                like: '3',
                comment: '3'
            },
            {
                name: 'minsk',
                like: '4',
                comment: '4'
            },
            {
                name: 'indbrestia',
                like: '5',
                comment: '5'
            },
            {
                name: 'usa',
                like: '6',
                comment: '7'
            }
        ]

        // this.getPublications()

    }


    async getPublications(){
        const token = sessionStorage.getItem('token')

        let response = await fetch('http://localhost:3200/person/publications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token: token}),
        });
        const json = await response.json();
    
        if(response.status == 200){
            this.userNickName = json.nickname
            this.userName = json.name
        }
        this.render() 
    }

    events(){
        let that = this
        return {
            logOut(){
                sessionStorage.clear()
                window.location.hash = 'login'
            },
            showMenu(){
                that.menuVisible.state = !that.menuVisible.state
                that.render()
            }
        }
    }
    
    renderPublications(){
        let result = ''
        this.publications.forEach(post => {
            result += `
                <div class="main-galery_item" data-id="0">
                    <div class="show-stats_type"></div>
                    <div class="show-stats">
                        <div class="show-stats_info">
                            <span>
                                <i class="fas fa-heart"></i>
                                <span>${post.like}</span>
                            </span>
                            <span>
                                <i class="fas fa-comment"></i>
                                <span>${post.comment}</span>
                            </span>
                        </div>
                    </div>
                    <img src="2.jpg" alt="${post.name}">
                </div>
            `
        })

        return result
    }
    getHtml() { 
        return `
        <div class="main-galery">
            ${this.renderPublications()}
        </div>
        `;
    }
}