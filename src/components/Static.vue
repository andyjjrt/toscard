<template>
    <div class="list-group d-grid col-md-9 mx-auto">
        <div class="list-group-item" v-for="i in card" :key="i.id">
            <div class="row">
                <div class="col-3 col-sm-2 col-xl-1">
                    <img v-if="i.role == 3" :src="img_url(i)" class="img-fluid border border-5 rounded border-white" onerror="this.error=null; this.src='./data/error_img.png'">
                    <img v-if="i.role == 2" :src="img_url(i)" class="img-fluid border border-5 rounded border-warning" onerror="this.error=null; this.src='./data/error_img.png'">
                    <img v-if="i.role == 1" :src="img_url(i)" class="img-fluid border border-5 rounded border-danger" onerror="this.error=null; this.src='./data/error_img.png'">
                </div>
                <div class="col-9 col-sm-10 col-xl-11 position-relative">
                    <span>{{i.ZH_name}}</span>
                    <div class="position-absolute bottom-0 end-0 px-1">
                        <span class="badge bg-primary fs-6">{{i.times}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Static",
    computed:{
        card(){
            return this.$store.state.card_detail
        }
    },
    methods:{
        img_url(card){
            if(card.src){
                return card.src
            }
            return 'https://web-assets.tosconfig.com/gallery/icons/' + card.id + '.jpg'
        }
    }
}
</script>

<style>

</style>