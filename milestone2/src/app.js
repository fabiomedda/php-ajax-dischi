import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

let root = new Vue({
    el: '#root',
    data: {
        dischiMusicali: null,
    },
    methods: {
        genere(val){
            console.log(val);
            console.log(val.target.value);
            
            /*
            if (val.target.value === "All") {
                this.getAxios("partials/index.php");
            } else if (val.target.value === "Pop") {
                this.getAxios("partials/pop.php");
            } else if (val.target.value === "Rock") {
                this.getAxios("partials/rock.php");
            } else if (val.target.value === "Metal") {
                this.getAxios("partials/metal.php");
            } else if (val.target.value === "Jazz") {
                this.getAxios("partials/jazz.php");
            }
            */

            this.getAxios("partials/get.php?genere=" + val.target.value);
            
        },
        getAxios(genere){
            axios.get(genere)
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
    },
    mounted() {
        axios.get('partials/get.php')
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
