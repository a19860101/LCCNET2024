<template>
    <TodoCreate @add="addTodo" />
    <TodoList :list="filter.todoUnCompleted" title="未完成"></TodoList>
    <TodoList :list="filter.todoCompleted" title="已完成"></TodoList>
    
</template>
<script>
    import TodoList from './TodoList.vue'
    import TodoCreate from './TodoCreate.vue'
    export default {
        components:{TodoList,TodoCreate},
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
            addTodo(payload){
                this.todos.push({
                    id:Date.now(),
                    name:payload,
                    isCompleted:false,
                });
            }
        },
        computed:{
            filter(){
                return {
                    todoCompleted:this.todos.filter(data=>data.isCompleted === true),
                    todoUnCompleted:this.todos.filter(data=>data.isCompleted === false)
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
</script>