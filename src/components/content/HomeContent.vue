<template>
    <div>
        <!-- 首页侧边导航栏 -->
        <el-container id="content">
            <el-aside width="200px">
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                    <el-radio-button :label="false"><i class="el-icon-s-unfold"></i></el-radio-button>
                    <el-radio-button :label="true"><i class="el-icon-s-fold"></i></el-radio-button>
                    
                </el-radio-group>
                <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">游戏</span>
                        </template>
                        <el-menu-item index="1-1" @click="gameSkip">游戏列表</el-menu-item>
                        <el-menu-item index="1-2" @click="classifySkip">游戏分类</el-menu-item>
                        <el-menu-item index="1-3" @click="typeSkip">游戏类型</el-menu-item>
                        <el-menu-item index="1-4" @click="originalPackageSkip">游戏原包</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2" disabled @click="promotionSkip">
                        <i class="el-icon-menu"></i>
                        <span slot="title">推广员</span>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span slot="title">广告管理</span>
                        </template>
                        <el-menu-item index="3-1" @click="advertisingListSkip">广告列表</el-menu-item>
                        <el-menu-item index="3-2" @click="addAdvertisingSkip">添加广告</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">礼包管理</span>
                        </template>
                        <el-menu-item index="4-1" @click="giftBagListSkip">礼包列表</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="5" @click="administratorSkip">
                        <i class="el-icon-setting"></i>
                        <span slot="title">管理员</span>
                    </el-menu-item>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span slot="title">区服管理</span>
                        </template>
                        <el-menu-item index="6-1" @click="districtSkip">区服列表</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 游戏列表跳转
        gameSkip() {
            this.$router.push('/home/game/GameList');
        },
        // 游戏分类跳转
        classifySkip() {
            this.$router.push('/home/game/GameClassify');
        },
        // 游戏类型跳转
        typeSkip() {
            this.$router.push('/home/game/GameType');
        },
        // 游戏原包跳转
        originalPackageSkip() {
            this.$router.push('/home/game/GameOriginalPackage');
        },
        // 广告列表跳转
        advertisingListSkip() {
            this.$router.push('/home/advertising/AdvertisingList');
        },
        // 添加广告跳转
        addAdvertisingSkip() {
            this.$router.push('/home/advertising/AddAdvertising');
        },
        // 礼包列表跳转
        giftBagListSkip() {
            this.$router.push('/home/giftBag/GiftBagList');
        },
        // 管理员跳转
        administratorSkip() {
            this.$router.push('/home/administrator/Administrator');
        },
        // 推广员跳转
        promotionSkip() {
            this.$router.push('/home/promotion/Promotion');
        },
        // 区服管理跳转
        districtSkip() {
            this.$router.push('/home/district/DistrictList');
        }
    },
    created() {
        this.gameSkip()
    }
}
</script>

<style lang="less" scoped>
// 左导航栏
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-aside {
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: rgb(84, 92, 100);
    .el-menu {
        background-color: rgb(84, 92, 100);
        border: 1px solid rgb(84, 92, 100);
    }
}

.el-menu-item.is-active {
    background: #2c3138;
}

.el-menu-item-group {
    background-color: rgb(84, 92, 100);
}

.el-submenu {
    background-color: rgb(84, 92, 100);
}

.el-menu-item, .el-submenu__title {
    background-color: rgb(84, 92, 100);
}
// 内容
#content {
    width: 100%;
    height: 90vh;
}
</style>
