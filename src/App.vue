<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top border">
            <div class="container-fluid position-relative">
                <a class="navbar-brand d-none d-md-block">抽卡模擬器</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="position-absolute top-0 start-50 translate-middle-x d-block d-md-none py-1">
                    <a class="navbar-brand">抽卡模擬器</a>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav" ref="navbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" role="button" @click="page = 'Home'; collapse.hide()" :class="{'active' : page == 'Home'}">抽卡</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" @click="page = 'Static'; collapse.hide()" :class="{'active' : page == 'Static'}">統計</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" ref="select_times" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{$store.state.times}}抽
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" @click="$store.commit('set_times', 1); collapse.hide()" role="button">1抽</a></li>
                                <li><a class="dropdown-item" @click="$store.commit('set_times', 10); collapse.hide()" role="button">10抽</a></li>
                                <li v-if="$store.state.version"><a class="dropdown-item" @click="$store.commit('set_times', $store.state.version.a_round); collapse.hide()" role="button">{{$store.state.version.a_round}}抽(一輪保底)</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" ref="select_mode" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{$store.state.mode == "normal" ? "正常" : "加倍"}}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" @click="$store.commit('set_mode', 'normal'); collapse.hide()" role="button">正常</a></li>
                                <li><a class="dropdown-item" @click="$store.commit('set_mode', 'up'); collapse.hide()" role="button">加倍</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown"  v-if="$store.state.version_list">
                            <a class="nav-link dropdown-toggle" ref="select_mode" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{$store.state.version.name}}  {{$store.state.version.detail}}
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li v-for="version in $store.state.version_list.version" :key="version.name">
                                    <a class="dropdown-item" role="button" @click="change_version(version); collapse.hide()">{{version.name}} {{version.detail}}</a>
                                </li>
                                <li><hr class="dropdown-divider"></li>
                                <li><h6 class="dropdown-header">歡迎製作其他卡匣</h6></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" @click="page = 'About'; collapse.hide()" :class="{'active' : page == 'About'}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="position-absolute top-0 end-0 py-1 px-3 d-flex">
                    <button class="bg-light border rounded fs-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="重設此輪" @click="$store.commit('reset_draw')">
                        <span class="px-2">{{$store.state.draw_count}}</span>
                    </button>
                    &nbsp;
                    <button class="bg-light border rounded fs-5" data-bs-toggle="tooltip" data-bs-placement="bottom" title="全部重置" @click="$store.commit('reset_all_draw'); $store.commit('get_card')">
                        <span class="px-2">{{$store.state.total_count}}</span>
                    </button>
                </div>
            </div>
        </nav>
        <br><br><br><br>
        <div class="container">
            <transition name="fade" mode="out-in">
                <div v-if="page == 'Home'" key="Home">
                    <Home />
                </div>
                <div v-if="page == 'Static'" key="Static">
                    <Static />
                </div>
                <div v-if="page == 'About'" key="Setting">
                    <About />
                </div>
            </transition>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
import Home from '@/components/Home.vue'
import Static from '@/components/Static.vue'
import About from '@/components/About.vue'
import Dropdown from 'bootstrap/js/dist/dropdown.js'
import Collapse from 'bootstrap/js/dist/collapse.js'
import Tooltip from 'bootstrap/js/dist/tooltip.js'
export default {
    name: "App",
    data(){
        return{
            page: "Home",
            collapse: null
        }
    },
    components:{
        Home,
        Static,
        About
    },
    created(){
        this.$store.commit('init_version')
    },
    mounted(){
        this.collapse = new Collapse(this.$refs.navbar, {toggle: false})
        new Dropdown(this.$refs.select_times)
        new Dropdown(this.$refs.select_mode)
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]')).forEach(tooltipNode => new Tooltip(tooltipNode))
    },
    computed:{
        versions(){
            return this.$store.state.version_list
        },
        version(){
            return this.$store.state.version
        },
    },
    methods:{
        change_version(version){
            this.$store.commit('reset_all_draw')
            this.$store.commit('select_version', version)
        }
    },
    watch:{
        version(){
            this.$store.commit('get_card')
            document.title = '抽卡模擬器 | ' + this.version.name + '-' + this.version.detail
        }
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>