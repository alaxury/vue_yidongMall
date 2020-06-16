<template>
    <div id="tab-bar">
        <div class="tab-bar-item" link="/home" @click="itemClick('/home')">
            <img v-if='!isActive' src="../assets/img/tabBar/home.svg">
            <img v-else src="../assets/img/tabBar/home_active.svg">
            <div :class="{active: isActive}">首页</div>
        </div>
        <div class="tab-bar-item" link="/category" @click="itemClick('/category')">
            <img v-if='!isActive' src="../assets/img/tabBar/category.svg">
            <img v-else src="../assets/img/tabBar/category_active.svg">
            <div :class="{active: isActive}">分类</div>
        </div>
        <div class="tab-bar-item" link="/cart" @click="itemClick('/cart')">
            <img v-if='!isActive' src="../assets/img/tabBar/cart.svg">
            <img v-else src="../assets/img/tabBar/cart_active.svg">
            <div :class="{active: isActive}">购物车</div>
        </div>
        <div class="tab-bar-item" link="/profile" @click="itemClick('/profile')">
            <img v-if='!isActive' src="../assets/img/tabBar/profile.svg">
            <img v-else src="../assets/img/tabBar/profile_active.svg">
            <div :class="{active: isActive}">我的</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
    //   path: ''
    }
  },
  methods: {
    itemClick (link) {
      console.log('12222')
      this.$router.replace(link)
      this.path = link
    }
  }
}
</script>

<style lang="less" scoped>
#tab-bar{
    display: flex;
    position: absolute;
    bottom: 0;
    background-color: #f6f6f6;
    height: 49px;
    padding-top: 5px;
    box-shadow: 0 -1px 2px #eee;
    width: 100%;
    .tab-bar-item {
        flex: 1;
        text-align: center;
        div {
            font-size: 14px;
        }
        img {
            width: 24px;
            height: 24px;
            vertical-align: middle;
        }
    }
}
.active{
    color: red;
}
</style>
