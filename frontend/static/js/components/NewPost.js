import appComponent from "./app.component.js";

export default class extends appComponent{
    constructor(params) {
        super(params);

        this.name = 'app-new-post'
    }

    events(){
        let that = this
        return {
            loadFile(data){
                console.log(data.target.files[0])
            }
        }
    }
    
    getHtml() {
        return `
            <div class='main-new-post'>
                <div class='new-post-container'>
                    <div class='new-post-container_photo'>
                        <img src="https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184050039319890.png" alt="new-photo">
                    </div>
                    <input type="file" accept="image/*" file='loadFile'/>
                    <textarea rows="5" cols="20" name="text" placeholder='Введите подпись...'></textarea>
                    <input  type="submit" value="Опубликовать" event='login'>
                </div>
            </div>
        `;
    }
}