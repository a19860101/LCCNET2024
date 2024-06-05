import TodoList from './TodoList.js'
export default {
    components:{TodoList},
    template:`
        <form action="" @submit.prevent="addTodo()">
            <input type="text" v-model="input">
            <input type="submit" value="新增項目">
        </form>

        <todo-list :list="filter.all" title="所有項目"></todo-list>
        <todo-list :list="filter.todoUnCompleted" title="未完成"></todo-list>
        <todo-list :list="filter.todoCompleted" title="已完成"></todo-list>


    `,
    data(){
        return {
            input:'',
            todos:[
                {
                    id:1,/* 主鍵 */
                    name:'洗衣服',
                    isCompleted:false,
                },
                {
                    id:2,
                    name:'做報告',
                    isCompleted:false,
                },
                {
                    id:3,
                    name:'運動',
                    isCompleted:true,
                },
            ]
        }
    },
    methods:{
        addTodo(){
            this.todos.push({
                id:Date.now(),
                name:this.input,
                isCompleted:false,
            });
            this.input='';
        }
    },
    computed:{
        filter(){
            return {
                todoCompleted:this.todos.filter(data=>data.isCompleted === true),
                todoUnCompleted:this.todos.filter(data=>data.isCompleted === false),
                all:this.todos
            }
        },
        todoCompleted(){
            return this.todos.filter(data=>data.isCompleted === true)
        },
        todoUnCompleted(){
            return this.todos.filter(data=>data.isCompleted === false)
        }
    }
}