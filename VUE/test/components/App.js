import AppTitle from './AppTitle.js'
import AppBtn from './AppBtn.js'
export default {
    template:`
        <app-title></app-title>
        <app-btn></app-btn>
    `,
    data(){
        return {
            title:'hello vue'       
        } 
    },
    components:{
        'app-title':AppTitle,
        'app-btn':AppBtn
        // AppTitle,
        // AppBtn
    },

}