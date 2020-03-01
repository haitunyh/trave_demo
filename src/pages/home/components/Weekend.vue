<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of recommendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data: function() {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg",
          title: "江西泡温泉圣地1",
          desc: "浪漫大连三江西泡温泉圣地1"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg",
          title: "江西泡温泉圣地2",
          desc: "浪漫大连三百山国家江西泡温泉圣地2"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/24/30f714149293b6.jpg_r_640x214_bfa37f12.jpg",
          title: "江西泡温泉圣地3",
          desc: "浪漫大江西泡温泉圣地3"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}



.item-img-wrapper {
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
}

.item-img {
  width: 100%
  
  
}

.item-info {
  min-width: 0;
  flex: 1;
  padding: 0.1rem;
}

.item-title {
  ellipsis();
  line-height: 0.54rem;
  font-size: 0.32rem;
}

.item-desc {
  ellipsis();
  line-height: 0.4rem;
  color: #ccc;
}


</style>