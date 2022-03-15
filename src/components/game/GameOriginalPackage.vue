<template>
    <div class="content">
        <!-- 内容 -->
        <el-main>
            <!-- 面包屑 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>游戏</el-breadcrumb-item>
                <el-breadcrumb-item>游戏原包</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 内容 -->
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>游戏原包</span>
                    <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-main>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
// 面包屑
.el-breadcrumb {
    margin-bottom: 20px;
}
// 卡片内容
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}

.box-card {
    display: block;
    // width: 85vw;
}

.el-main {
    overflow: hidden;
}

.content {
    width: 100%;
}
</style>
