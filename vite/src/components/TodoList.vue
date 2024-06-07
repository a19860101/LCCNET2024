<template>
    <h2 v-if="list.length">{{ title }} ({{list.length}})</h2>
    <ul>
        <Todo v-for="todo in list" :key="todo.id" :item="todo" />
    </ul>
</template>
<script>
    import Todo from './Todo.vue'
    export default {
        components:{Todo},
        props:{
            list:Array,
            title:String
        }
    }
</script>