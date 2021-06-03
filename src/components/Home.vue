<template>
    <div>
        <div class="d-grid gap-2 col-9 mx-auto">
            <button class="btn btn-primary" type="button" @click="draw">抽卡</button>
        </div>
        <br>
        <div class="card card-body">
            <div class="row mb-3">
                <div class="fs-4">抽卡結果</div>
            </div>
            <div class="d-grid gap-2 col-12 col-md-9 col-lg-6 mx-auto">
                <div class="row row-cols-5 g-1">
                    <div class="col" v-for="i in this_roll" :key="i.index">
                        <img v-if="card[i.id].role == 3" :src="img_url(i.id)" class="img-fluid border border-5 rounded border-white" onerror="this.error=null; this.src='./data/error_img.png'">
                        <img v-if="card[i.id].role == 2" :src="img_url(i.id)" class="img-fluid border border-5 rounded border-warning" onerror="this.error=null; this.src='./data/error_img.png'">
                        <img v-if="card[i.id].role == 1" :src="img_url(i.id)" class="img-fluid border border-5 rounded border-danger" onerror="this.error=null; this.src='./data/error_img.png'">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data(){
        return{
            this_roll: new Array()
        }
    },
    computed:{
        card(){
            return this.$store.state.card_detail
        }
    },
    methods:{
        draw(){
            this.this_roll = new Array()
            for(let counter = 0; counter < this.$store.state.times; counter++){
                let tmp = Math.random(), i
                if(this.$store.state.draw_count == this.$store.state.version.a_round - 1){
                    for(i in this.card){
                        if(this.card[i].role == 1){
                            break;
                        }
                    }
                }else{
                    for(i in this.card){
                        tmp -= this.card[i].probability[this.$store.state.mode];
                        if(tmp <= 0){
                            break;
                        }
                    }
                }
                this.$store.commit('add_draw', i)
                this.this_roll.push({id: i, index: counter})
            }
        },
        img_url(id){
            if(this.card[id].src){
                return this.card[id].src
            }
            return 'https://web-assets.tosconfig.com/gallery/icons/' + id + '.jpg'
        }
    },
    watch:{
        card(){
            this.this_roll = new Array()
        }
    }
}
</script>

<style>

</style>