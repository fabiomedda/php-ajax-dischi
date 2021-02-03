import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

let root = new Vue({
    el: '#root',
    data: {
        dischiMusicali: null,
    },
    methods: {

    },
    mounted() {
        axios.get('http://localhost/classe%2023/php-ajax-dischi/milestone2/index.php')
            .then(response => {
                console.log(response);
                console.log(response.data);
                this.dischiMusicali = response.data;
                console.log(this.dischiMusicali);
            })
            .catch(error => {
                console.log(error);
            })
    }
});
/*
https://cors-anywhere.herokuapp.com/
http://localhost/classe%2023/php-ajax-dischi/milestone2/index.php
*/