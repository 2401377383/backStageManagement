<template>
    <div class="content">
        <!-- 内容 -->
        <el-main>
            <!-- 面包屑 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>管理员</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 内容 -->
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>角色管理</span>
                    <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
                </div>
                <!-- 新增/删除 按钮 -->
                <div>
                    <el-button type="primary" round>新增</el-button>
                    <el-button type="success" round>删除</el-button>

                </div>
                <el-table :border="true" ref="tableData" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <!-- 角色编号 -->
                    <el-table-column prop="serial" label="角色编号"></el-table-column>
                    <!-- 角色名称 -->
                    <el-table-column prop="username" label="角色名称"></el-table-column>
                    <!-- 角色账号 -->
                    <el-table-column prop="account" label="角色账号"></el-table-column>
                    <!-- 显示顺序 -->
                    <el-table-column prop="order" label="显示顺序"></el-table-column>
                    <!-- 状态 -->
                    <el-table-column prop="" label="状态">
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.state"></el-switch>
                        </template>
                    </el-table-column>
                    <el-table-column prop="time" label="创建时间"></el-table-column> <!-- 创建时间 -->
                    <el-table-column label="操作" width="200"> <!-- 操作 -->
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "first",
            // 游戏手游列表
            tableData: [
                {
                    serial: 1,
                    username: '超级管理员',
                    account: 'admin',
                    order: 1,
                    state: true,
                    time: '2022/03/10 18:05:45',
                },
            ],
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleEdit(index, row) {
        console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
    },
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

.el-table--border {
    margin-top: 20px;
}
</style>
