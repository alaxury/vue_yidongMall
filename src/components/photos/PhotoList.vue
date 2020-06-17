<template>
  <!-- <div id="slider" class="mui-slider">
    <div
      id="sliderSegmentedControl"
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          class="mui-control-item mui-active"
          href="#item1mobile"
          data-wid="tab-top-subpage-1.html"
        >推荐</a>
        <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
        <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
        <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">美女</a>
      </div>
    </div>
  </div> -->
  <van-tabs>
  <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">
    人生，不是一成不变的，生活，不是固定不变的。得意时不要炫耀，失意时不要气馁，给别人一点... {{ index }}
  </van-tab>
</van-tabs>
</template>

<script>
// import mui from '../../lib/mui/js/mui.min.js'
// mui('.mui-scroll-wrapper').scroll({ deceleration: 0.0005 })

export default {
  data () {
    return {}
  },
  mounted () {
    console.log('7777')
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.van-tab__pane, .van-tab__pane-wrapper{
    // margin-top: 20px;
    font-size: 13px;
    padding: 20px;
    color: gray;
}
</style>
