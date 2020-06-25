
var resource = Vue.resource('/message');

Vue.component('todo-item', {
    props:['messages'],
    data: function(){
        return {
            text:'',
            error:null,
        }
    },
    methods:{
        save: function() {
            this.$http.get('http://localhost:8080/message/u/' + this.text).then(result=>result.json().then(data=>{
                if(data ==null){
                    this.error='Нет информации по данному рейсу';
                }
                else{
                    this.messages=[];
                    this.messages.push(data);
                    this.error=null;
                }
                console.log(data);
            }));
        }

    },
    template: '<div>' +
        '<div style="padding-bottom:2vh ">' +
        '<nav class="top-menu">'+
        '<ul class="menu-main">'+
        '<li><a href="/start.html" >Найти билеты</a></li>'+
        '<li><a href="">Онлайн регистрация</a></li>'+
        '<li><a href="" class="current">Расписание</a></li>'+
        '<li><a href="">Возврат</a></li>'+
        '</ul>'+
        '</nav>'+
        '<div style="padding-top:2vh ">'+
        '<input type="text" class="inputSearch" placeholder="Введите номер рейса" v-model="text" />' +
        '<input type="button"  value="Найти рейс" @click="save" />' +
        '</div>'+
        '</div>'+
        '<table style="border: 2px solid black" align="center" width="90%"><tr style="border: 2px solid black">' +
        '<th width="5%">№</th>'+
        '<th width="5%">Номер рейса</th>'+
        '<th width="5%">Время</th>'+
        '<th width="5%">Место</th>'+
        '</tr>' +
        '<tr v-for = "(trip,index) in messages" :key="trip.index" style="border: 2px solid black"> ' +
        '<td >{{index+1}}</td>'+
        '<td >{{trip.tripNumber}}</td>'+
        '<td >{{trip.dateFrom}}</td>'+
        '<td >{{trip.placeFrom}}</td>'+
        '</tr>' +
        '</table>'+

        '</div>',
    created: function(){
        resource.get().then(result=>result.json().then(data=>{
            data.forEach(message=>this.messages.push(message));
            console.log(this.messages);
        }));
    }
});
Vue.component('start-item', {
    props:['messages'],
    data: function(){
        return {
            text:'',
            error:'',
        }
    },
    methods:{
        save: function() {
            var id = {text: this.text};
            console.log('kjkjfj');
            this.$http.get('http://localhost:8080/message/u/' + this.text).then(result=>result.json().then(data=>{
                if(data ==null){
                    this.error='Нет информации по данному рейсу';
                }
                console.log(data);
            }));
        }

    },
    template: '<div>' +
        '<div style="padding-bottom:2vh ">' +
        '<nav class="top-menu">'+
        '<ul class="menu-main">'+
        '<li><a href="/start.html" class="current" >Найти билеты</a></li>'+
        '<li><a href="">Онлайн регистрация</a></li>'+
        '<li><a href="/index.html" >Расписание</a></li>'+
        '<li><a href="">Возврат</a></li>'+
        '</ul>'+
        '</nav>'+
        '<div style="padding-top:2vh ">'+
        '<input type="text" class="inputSearch" placeholder="Введите номер рейса" v-model="text" />' +
        '<input type="button"  value="Найти рейс" @click="save" />' +
        '</div>'+
        '</div>'+
        '<table style="border: 2px solid black" align="center" width="90%"><tr style="border: 2px solid black">' +
        '<th width="5%">№</th>'+
        '<th width="5%">Номер рейса</th>'+
        '<th width="5%">Время</th>'+
        '<th width="5%">Место</th>'+
        '</tr>' +
        '<tr v-for = "(trip,index) in messages" :key="trip.index" style="border: 2px solid black"> ' +
        '<td >{{index+1}}</td>'+
        '<td >{{trip.tripNumber}}</td>'+
        '<td >{{trip.dateFrom}}</td>'+
        '<td >{{trip.placeFrom}}</td>'+
        '</tr>' +
        '</table>'+

        '</div>',
    created: function(){
        resource.get().then(result=>result.json().then(data=>{
            data.forEach(message=>this.messages.push(message));
            console.log(this.messages);
        }));
    }
});



var app = new Vue({
    el: '#app',
    template:'<todo-item :messages="messages"/>',
    data: {
        messages: []
    }
});

var start = new Vue({
    el: '#start',
    template:'<start-item :messages="messages"/>',
    data: {
        messages: []
    }
});

