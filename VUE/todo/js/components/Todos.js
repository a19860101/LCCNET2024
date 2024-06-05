import TodoList from './TodoList.js'
import TodoCreate from './TodoCreate.js'
export default {
    components:{TodoList,TodoCreate},
    template:`
        <todo-create @add="addTodo"></todo-create>

        <todo-list :list="filter.all" title="所有項目"></todo-list>
        <todo-list :list="filter.todoUnCompleted" title="未完成"></todo-list>
        <todo-list :list="filter.todoCompleted" title="已完成"></todo-list>


    `,
    data(){
        return {
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
        addTodo(data){
            console.log(data)
            this.todos.push({
                id:Date.now(),
                name:data,
                isCompleted:false,
            });
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