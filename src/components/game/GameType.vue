<template>
    <div class="content">
        <!-- 内容 -->
        <el-main>
            <!-- 面包屑 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>首页</el-breadcrumb-item>
                <el-breadcrumb-item>游戏</el-breadcrumb-item>
                <el-breadcrumb-item>游戏类型</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- 内容 -->
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <!-- 游戏类型 -->
                <el-tab-pane label="游戏类型" name="first">
                    <!-- 新增/删除 按钮 -->
                    <div>
                        <el-button type="primary" round>新增</el-button>
                        <el-button type="success" round>删除</el-button>
                    </div>
                    <el-table :border="true" ref="tableData" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column prop="gameType" label="游戏类型"></el-table-column> <!-- 游戏类型 -->
                        <el-table-column prop="show" label="显示状态"></el-table-column> <!-- 显示状态 -->
                        <el-table-column prop="payment" label="添加人员"></el-table-column> <!-- 添加人员 -->
                        <el-table-column prop="download" label="添加时间"></el-table-column> <!-- 添加时间 -->
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
                </el-tab-pane>
                <!-- 运营状况 -->
                <el-tab-pane label="运营状况" name="second">
                    <!-- 新增/删除 按钮 -->
                    <div>
                        <el-button type="primary" round>新增</el-button>
                        <el-button type="success" round>删除</el-button>

                    </div>
                    <el-table :border="true" ref="tableData" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                        <el-table-column type="selection" width="55"></el-table-column>
                        <el-table-column prop="gameType" label="运营状态"></el-table-column> <!-- 运营状态 -->
                        <el-table-column prop="show" label="显示状态"></el-table-column> <!-- 显示状态 -->
                        <el-table-column prop="payment" label="添加人员"></el-table-column> <!-- 添加人员 -->
                        <el-table-column prop="download" label="添加时间"></el-table-column> <!-- 添加时间 -->
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
                </el-tab-pane>
            </el-tabs>
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
                    gameType: "网游",
                    show: '开启',
                    payment: 'admin',
                    download: '2022-3-10',
                },
                {
                    gameType: "网游",
                    show: '开启',
                    payment: 'admin',
                    download: '2022-3-10',
                },
                {
                    gameType: "网游",
                    show: '开启',
                    payment: 'admin',
                    download: '2022-3-10',
                },
                {
                    gameType: "网游",
                    show: '开启',
                    payment: 'admin',
                    download: '2022-3-10',
                },
                {
                    gameType: "网游",
                    show: '开启',
                    payment: 'admin',
                    download: '2022-3-10',
                },
                {
                    gameType: "网游",
                    show: '开启',
                    payment: 'admin',
                    download: '2022-3-10',
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
        }
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
