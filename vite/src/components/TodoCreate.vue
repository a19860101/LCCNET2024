<template>
    <form action="" @submit.prevent="addTodo()">
        <input type="text" v-model="input">
        <input type="submit" value="新增項目">
    </form>
</template>
<script>
    export default {
        data(){
            return {
                input: '',
            }
        },
        methods:{
            addTodo(){
                this.$emit('add',this.input)
                this.input = '';
            }
        }
    }
</script>