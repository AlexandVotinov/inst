import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);

        this.name = 'app-new-post'
        this.imgDefault = 'https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png'
        this.errorMessage = ''

        this.imgData = ''
        this.imgDescription = ''

        this.upload = new FormData()
    }

    events(){
        let that = this
        return {
            loadFile(data){
                const file = data.target.files[0]
                that.upload.append('file', file, file.name)

                let reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = () => {
                    that.imgData = that.imgDefault = reader.result
                    that.render()
                }
            },
            async imgToPublish(){
                if(that.imgData && that.imgDescription && that.token){
                    that.upload.append('token', that.token)
                    that.upload.append('text', that.imgDescription)
                    let response = await fetch('http://localhost:3200/person/new-post', {
                        method: 'POST',
                        body: that.upload
                    });
                    const json = await response.json();
                    if(response.status == 200){
                        return that.navigateTo('main')
                    }else{
                        that.errorMessage = json.message;
                    }
                    that.render()
                }
            }
        }
    }
    
    getHtml() {
        return `
            <div class='main-new-post'>
                <div class='new-post-container'>
                    <div class='new-post-container_photo'>
                        <img src="${this.imgDefault}" alt="new-photo">
                    </div>
                        <input type="file" accept="image/*" file='loadFile'/>
                        <textarea rows="5"  bind='imgDescription' cols="20" name="text" placeholder='Введите подпись...'></textarea>
                        <input  type="submit" value="Опубликовать" event='imgToPublish'>
                        <div>${this.errorMessage}</div>
                </div>
            </div>
        `;
    }
}