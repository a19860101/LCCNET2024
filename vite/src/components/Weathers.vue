<template>
    <select name="" id="" v-model="city" @change="getData()">
        <option value="">--請選擇城市--</option>
        <option v-for="c in list" :value="c.val">
            {{ c.text }}
        </option>
        <!-- <option value="taipei">台北</option> -->
        <!-- <option value="tokyo">東京</option> -->
        <!-- <option value="seoul">首爾</option> -->
        <!-- <option value="bangkok">曼谷</option> -->
    </select>
    <div v-if="weather">
        {{ selectedCity }} / {{ list.find(data=>data.val === city).text }}
        <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" alt="">
        <div>目前天氣:{{ weather.weather[0].description }}</div>
        <div>平均溫度:{{weather.main.temp}}&deg;C</div>
        <div>體感溫度:{{weather.main.feels_like}}&deg;C</div>
        <div>最高溫:{{weather.main.temp_min}}&deg;C</div>
        <div>最低溫:{{weather.main.temp_max}}&deg;C</div>
        <div>濕度:{{weather.main.humidity}}%</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                weather:'',
                city:'',
                list:[
                    {val:'taipei',text:'台北'},
                    {val:'tokyo',text:'東京'},
                    {val:'seoul',text:'首爾'},
                    {val:'bangkok',text:'曼谷'},
                    {val:'osaka',text:'大阪'},
                    {val:'brazil',text:'巴西'}
                ]
            }
        },
        methods:{
            getData(){
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=b1ecbccd638b763d489602917ba47cc3&units=metric&lang=zh_tw`;
                fetch(url).then(res=>res.json()).then(data =>{
                    this.weather = data;
                })
            }
        },
        computed:{
            selectedCity(){
                if(this.city){
                    return this.list.find(data=>data.val === this.city).text;
                }else{
                    return;
                }
            },
            icon(){
                
            }
        },  
        created(){
            // let url = 'https://api.openweathermap.org/data/2.5/weather?q=taipei&appid=b1ecbccd638b763d489602917ba47cc3&units=metric&lang=zh_tw';
            // fetch(url).then(res=>res.json()).then(data =>{
            //     this.weather = data;
            // })
        }
    }
</script>