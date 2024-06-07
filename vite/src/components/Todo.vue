<template>
    <li>
        {{item.name}}
        <input type="checkbox" v-model="item.isCompleted">
    </li>
</template>
<script>
    export default {
        props:{
            item:Object
        }
    }
</script>