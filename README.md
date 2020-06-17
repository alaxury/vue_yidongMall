# vue_yidong_demo
## DAY 1 脚手架搭建和目录规划
引用CSS样式,css引用要加@,js不用
@import url(footer.css)
@import 'url'

## 首页制作
1. minut框架
https://blog.csdn.net/Lemon_wzq/article/details/103274479

2. mui github上下载
https://github.com/dcloudio/mui
把dis文件copy到自己项目中
在main.js中导入
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

3. header用的mint ui, tabbar用的mui

### 轮播图
1. 给swiper加高度
2. 用require()包裹路径之后，图片才可以显示！
https://blog.csdn.net/qq_38134913/article/details/101229085?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase

### 九宫格
用的mui

### 动画
<transition>
      <router-view></router-view>
</transition>


.v-enter {
  opacity: 0;
  transform: translateX(100%);   //右进
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);    //右进左出
  position: absolute;   // 这个得加     
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

### 图片列表
1. 顶部滑动条，用的mui
   1. 用的tab-top-webview-main.html, 
   2. 会占满全屏，去掉mui-fullscreen
   3. 不滚动，需要手动初始化scroll 控件
   + 导入mui js
   + 需要关闭严格模式
   + 底底tab点不动，注释mui.js后可以点动。JS和底部tab类名冲突
     解决方法，把底部tab的类名改下
2. 别人推荐移动端用vant，好吧。我去看下vant.
   

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
