<template>
<div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl">
    </swiper-slide>
   
    <!-- <swiper-slide>
     <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/201402/08/3f56a73675e4ee05d9d4198a699f5433.jpg_r_800x800_b4a1037e.jpg">
       </swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>
<script>
export default {
    name: 'HomeSwiper',
    data: function() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg'
        },{
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1510/de/2c2ca6e158f80f.jpg_r_640x214_2385de27.jpg'
        },{
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/74/a665dfecf12ae.jpg_r_640x214_5d22909a.jpg'
        },{
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1606/44/19689f8a01f5b2.jpg_r_640x214_7959e855.jpg'
        }]
        }
        
    }
}
</script>
<style lang="stylus" scoped>
.wrapper  >>>.swiper-pagination-bullet-active {
        background: #fff
    }
.wrapper {
    overflow hidden
    width: 100%
    background gray
   
    
}
    .swiper-img {
    width: 100%,
  
}
</style>