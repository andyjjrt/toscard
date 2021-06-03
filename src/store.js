import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        version_list: null,
        version: null,
        draw_count: 0,
        total_count: 0,
        card_detail: null,
        mode:"normal",
        times: 10
    },
    mutations: {
        init_version(state){
            axios.get('./data/version.json').then((res) => {
                state.version_list = res.data
                state.version = res.data.version[res.data.latest]
            })
        },
        select_version(state, payload){
            state.version = payload
        },
        get_card(state){
            axios.get('./data/' + state.version.name + '.json').then((res) => {
                for(let i in res.data){
                    res.data[i].times = 0
                }
                state.card_detail = res.data
            })
        },
        reset_all_draw(state){
            state.draw_count = 0;
            state.total_count = 0;
            state.times = 10
        },
        reset_draw(state){
            state.draw_count = 0;
        },
        add_draw(state, payload){
            state.draw_count += 1;
            state.draw_count %= state.version.a_round
            state.total_count += 1;
            state.card_detail[payload].times ++
        },
        set_times(state, payload){
            state.times = payload
        },
        set_mode(state, payload){
            state.mode = payload
        }
    }
})

export default store