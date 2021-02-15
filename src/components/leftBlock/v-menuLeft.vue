<template>
    <div class="v-menuLeft">
        <div class="menuMen list-group-item list-group-item-action" v-on:click="show = !show">
            <img src="../../images/130917.svg" alt="" srcset="">
            <h5>Menu</h5>
        </div>
        <transition name="fade">
        <div 
        v-if="show" 
        class="menuList"
        
        >
            <ul class="list-group list-group-flush" >
                <li class="list-group-item list-group-item-action" data-name='Victorias Secret'>Victoria's Secret
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action"
                            v-for="(victoria, index) in victoriaS"
                            :value="victoria.value"
                            :key="index"
                            @click="searchMenu(victoria.value)"
                            

                        ><router-link :to="{name : 'catalog'}">
                            {{ victoria.name }}
                        </router-link>
                        </li>
                        
                    </ul>
                </li>
                <li class="list-group-item list-group-item-action" data-name='Биоэпиляция'>Биоэпиляция
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action"
                            v-for="(bioEpilaci, index) in bioEpilacia"
                            :value="bioEpilaci.value"
                            :key="index"
                            @click="searchMenu(bioEpilaci.value)"
                        >
                            <router-link :to="{name : 'catalog'}">
                                {{bioEpilaci.name}}
                            </router-link>
                        </li>
                        
                    </ul>
                </li>
                <li class="list-group-item list-group-item-action">Ногти
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action"
                            v-for="(nogt, index) in nogti"
                            :value="nogt.value"
                            :key="index"
                            @click="searchMenu(nogt.value)"
                        >
                        <router-link :to="{name : 'catalog'}">
                                {{nogt.name}}
                        </router-link>
                        </li>
                        
                    </ul>
                </li>
                <li class="list-group-item list-group-item-action">Ресницы
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action"
                            v-for="(resnic, index) in resnici"
                            :value="resnic.value"
                            :key="index"
                            @click="searchMenu(resnic.value)"
                        >
                        <router-link :to="{name : 'catalog'}">
                                {{resnic.name}}
                        </router-link>
                        </li>
                        
                    </ul>
                </li>
                <li class="list-group-item list-group-item-action">Уход за кожей тела
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action"
                            v-for="(uhod_bod, index) in uhod_body"
                            :value="uhod_bod.value"
                            :key="index"
                            @click="searchMenu(uhod_bod.value)"
                        >
                        <router-link :to="{name : 'catalog'}">
                                {{uhod_bod.name}}
                        </router-link>
                        </li>
                        
                    </ul>
                </li>
            </ul>
        </div>
        </transition>
        
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
 
export default {
    name : "v-menuLeft",
    data () {
        return {
            show: false,
            victoriaS : [
                {value: 'locion', name : 'Лосьон'},
                {value: 'sprey', name : 'Спрей'}
                ],
            bioEpilacia :[
                {value: 'apparat', name : 'Аппараты'},
                 {value: 'vosk', name: 'Воск'},
                 {value: 'rashodnii_material',name : 'Расходный материал'},
                 {value : 'sredsva-do-i-posle', name : 'Средства до и после депиляции'}
                 ],
            nogti: [
                {value: 'dizain', name :'Ногти'},
                {value: 'jidkie-sredstva', name :'Жидкие средства'},
                {value: 'instrumenty', name :'Инструменты'},
                {value: 'lac-polig', name :'Лаки, гель-лаки, полигели'},
                {value: 'lecenie-i-uhod', name :'Лечение и уход'},
                {value: 'oborudivanie', name :'Оборудование'},
                {value: 'sredstva-dl-manicur', name :'Средства для маникюра'},
                ],
            resnici : [
                {value: 'cley-resnicy', name :'Клей для ресниц'}, 
                {value: 'lecebka', name :'Лечебка'},
                {value: 'obezjirivatel', name :'Обезжириватель'},
                {value: 'pincet-brovi', name :'Пинцет для бровей'},
                {value: 'pincet', name :'Пинцет'},
                {value: 'rashodniki', name :'Расходники'},
                {value: 'remuver', name :'Ремувер'},
                {value: 'resnici', name :'Реснички'},
                ],
            uhod_body : [
                {value: 'acrab-gel-piling', name :'Скрабы, гели, пилинг'},
                {value: 'uhod-volosy', name :'Уход за волосами'},
                {value: 'uhod-lytso', name :'Уход за кожей лица'},
                {value: 'uhod-nogy', name :'Уход за кожей рук и ног'},
                ],
            
        }
    },

    methods : {
        ...mapActions([
            'GET_SEARCH_MENU'
        ]),
        searchMenu(value) {
            this.GET_SEARCH_MENU(value);
        }
    },
    computed : {
        ...mapGetters ([
            "SEARCH_MENU",
        ]),
    },
    

}
</script>

<style lang="scss">
li {
    list-style-type: none;
}
.v-menuLeft {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    .menuMen {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        background: url("../../images/bgHeader.jpg") no-repeat;
        padding: 0;
        cursor: pointer;
        &:hover {
            transition: .5s;
            opacity: 0.8;
            }
        h5 {
            margin-top: 2%;
            color: rgb(85, 84, 84);

        }
        img {
            width: 20px;
            margin-right: 2%;
            cursor: pointer;
        }
    }
    .menuList {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 0; /* Убираем поля */
            margin-left: 0; /* Отступ слева */
            li {
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: url("../../images/bgHeader.jpg") no-repeat;
                cursor: pointer;
                
                animation: blockmenu 1s linear;
                animation-fill-mode: both;
                transition:  .8s;
                &:hover {
                    padding-right: 10px;
                    opacity: 0.5;
                }
                &:hover ul {
                    opacity: 1;
                    top: 0;
                }
                ul {
                    position: absolute;
                    width: 100%;
                    left: 100%;
                    opacity: 0;
                    top : -9999;
                    transition: 0.5s opacity;
                    border-left: 10px solid transparent;

                    li {
                        a {
                            color: #495057;
                            &:hover {
                                color : rgb(36, 36, 36);
                            }
                        }
                        
                        position: relative;
                        transition:  .8s;
                        &:hover {
                            padding-right: 10px;
                            opacity: 0.5;
                        }
                        &:hover ul {
                            opacity: 1;
                            top: 0;
                        }
                        ul {
                            position: absolute;
                            width: 100%;
                            left: 100%;
                            opacity: 0;
                            top : -9999;
                            transition: 0.5s opacity;
                            border-left: 10px solid transparent;
                        }
                    }
                }
            }
            @keyframes blockmenu {
            0% {left: -50px; opacity: 0;}
            50% {left: 20px; opacity: 0.5;}
            100% {left: 0px; opacity: 1;}
            }
            & li:nth-child(1) {animation-delay: .1s}
            & li:nth-child(2) {animation-delay: .2s}
            & li:nth-child(3) {animation-delay: .3s}
            & li:nth-child(4) {animation-delay: .4s}
            & li:nth-child(5) {animation-delay: .5s}

        }
        
                
    }
    // при повторном нажатии на меню, убирает ссылки
    .fade-enter-active {
    transition: all .3s ease;
    }
    .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter, .fade-leave-to
     /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
}
</style>