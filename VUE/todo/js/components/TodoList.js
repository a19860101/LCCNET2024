export default {
    template:`
        <h2 v-if="filter.todoUnCompleted.length">未完成 ({{filter.todoUnCompleted.length}})</h2>
        <ul>
            <li v-for="todo in filter.todoUnCompleted" :key="todo.id">
                {{todo.name}}
                <input type="checkbox" v-model="todo.isCompleted">
            </li>
        </ul>
    `,
    props:{
        filter:Object
    }
}