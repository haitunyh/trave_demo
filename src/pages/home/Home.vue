<template>
<div>
<home-header></home-header>
<swiper-header></swiper-header>

</div>
   
</template>

<script>
import HomeHeader from './components/Header'
import SwiperHeader from './components/Swiper'
export default {
    name: 'Home',
    components: {
        HomeHeader: HomeHeader,
        SwiperHeader: SwiperHeader
    }
}
</script>

<style>

</style>