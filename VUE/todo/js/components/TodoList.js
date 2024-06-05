export default {
    template:`
        <h2 v-if="list.todoUnCompleted.length">未完成 ({{list.todoUnCompleted.length}})</h2>
        <ul>
            <li v-for="todo in list.todoUnCompleted" :key="todo.id">
                {{todo.name}}
                <input type="checkbox" v-model="todo.isCompleted">
            </li>
        </ul>
    `,
    props:{
        list:Object
    }
}