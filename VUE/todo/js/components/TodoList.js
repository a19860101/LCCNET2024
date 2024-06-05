export default {
    template:`
        <h2 v-if="list.length">{{title}} ({{list.length}})</h2>
        <ul>
            <li v-for="todo in list" :key="todo.id">
                {{todo.name}}
                <input type="checkbox" v-model="todo.isCompleted">
            </li>
        </ul>
    `,
    props:{
        list:Array,
        title:String,
    }
}