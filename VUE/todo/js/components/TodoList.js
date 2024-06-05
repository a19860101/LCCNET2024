import Todo from './Todo.js'
export default {
    components:{Todo},
    template:`
        <h2 v-if="list.length">{{title}} ({{list.length}})</h2>
        <ul>
            <todo v-for="todo in list" :key="todo.id" :item="todo"></todo>
        </ul>
    `,
    props:{
        list:Array,
        title:String,
    }
}