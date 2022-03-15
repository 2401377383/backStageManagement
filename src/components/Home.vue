<template>
    <el-container id="body">
        <!-- 首页导航头部 -->
        <el-header>
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
                <el-menu-item index="1" @click="homeSkip">首页</el-menu-item>
                <el-menu-item index="2" @click="userSkip">用户</el-menu-item>
                <span class="nav_username">admin</span>
            </el-menu>
        </el-header>
        <router-view></router-view>
        <el-footer>游戏盒子管理后台</el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        // 切换至首页
        homeSkip() {
            this.$router.push('/home/game/GameList');
        },
        // 切换至用户
        userSkip() {
            this.$router.push('/user');
        },
    },
    mounted() {
        this.homeSkip()
    }
}
</script>

<style scoped lang="less">
#body {
    overflow: hidden;
}
// 上导航栏
.el-menu-demo {
    padding-left: 200px;
}

.nav_username {
    float: right;
    line-height: 60px;
    margin-right: 30px;
    color: #fff;
    cursor: pointer;
}
.el-header {
    padding: 0;
    box-sizing: border-box;
    flex-shrink: 0;
}

// 底部
.el-footer {
    width: 100%;
    text-align: center;
    line-height: 58px;
    background-color: rgb(84, 92, 100);
    color: #fff;
    border-top: 1px solid rgb(94, 122, 150);
    position: absolute;
    left: 0;
    bottom: 0;
}

</style>