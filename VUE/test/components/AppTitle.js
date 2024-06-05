export default {
    template:`<h1>{{title}}</h1>`,
    props:{
        title:{
            type: String,
            default: 'hello'
        }
    }
}