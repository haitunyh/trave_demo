<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) of recommendList" :key="index">
        <img
          class="item-img"
          :src="item.imgUrl"
          alt="三百山国家森林公园"
        />

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  data: function() {
      return{
      recommendList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/fb/fb0ef8eddd7cf62da3.water.jpg_200x200_8ccd5491.jpg',
          title: '三百山国家森林公园',
          desc: '浪漫大连三百山国家森林公园'
      },{
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/fb/fb0ef8eddd7cf62da3.water.jpg_200x200_8ccd5491.jpg',
          title: '三百山国家森林公园2',
          desc: '浪漫大连三百山国家森林公园2'
      },{
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1911/fb/fb0ef8eddd7cf62da3.water.jpg_200x200_8ccd5491.jpg',
          title: '三百山国家森林公园3',
          desc: '浪漫大连三百山国家森林公园3'
      },]
  }
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

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;
}

.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
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

.item-button {
  line-height: 0.44rem;
  margin-top: 0.16rem;
  background: #ff9300;
  padding: 0.1rem;
  border-radius: 0.06rem;
  color: #fff;
}
</style>