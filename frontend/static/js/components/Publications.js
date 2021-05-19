import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);

        this.name = 'app-publications'

        this.publications = []

        this.getPublications()

    }

    async getPublications(){
        let response = await fetch('http://localhost:3200/person/publications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: this.page}),
        });
        const json = await response.json();
    
        if(response.status == 200){
            this.publications = json.posts
        }
        this.render() 
    }
    

    events(){
        let that = this
        return {
            
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
                    <img src="http://localhost:3200/posts/${post.imgUrl}" alt="${post.name}">
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