<template>
  <div>
    <ul class="mui-table-view">
      <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>-->
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
       <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://c-ssl.duitang.com/uploads/item/201601/17/20160117131007_HAeVX.jpeg" />
          <div class="mui-media-body">
            <h1>吃西瓜吹空调 <span>2020-06-17</span></h1>
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.mui-h1, h1{
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    span{
        color: #dddddd;
        font-weight: normal;
    }
}
.mui-media-body{

}
</style>
