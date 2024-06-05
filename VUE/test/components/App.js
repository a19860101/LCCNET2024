import AppTitle from './AppTitle.js'
import AppBtn from './AppBtn.js'
export default {
    template:`
        <app-title :title="text"></app-title>
        <app-title title="hello vue123"></app-title>
        <app-title></app-title>
        <app-title></app-title>
        <app-title></app-title>
        <app-title></app-title>
        <app-title title="哈窩"></app-title>
        <app-btn></app-btn>
    `,
    data(){
        return {
            text:'portfoilo'    
        } 
    },
    components:{
        'app-title':AppTitle,
        'app-btn':AppBtn
        // AppTitle,
        // AppBtn
    },

}