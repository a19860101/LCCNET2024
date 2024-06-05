export default {
    template:`
    <li>
        {{item.name}}
        <input type="checkbox" v-model="item.isCompleted">
    </li>
    `,
    props:{
        item:Object
    }
}