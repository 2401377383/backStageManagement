<template>
  <div class="content">
    <!-- 内容 -->
    <el-main>
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>游戏</el-breadcrumb-item>
            <el-breadcrumb-item>游戏列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 内容 -->
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <!-- 手游 -->
            <el-tab-pane label="手游" name="first">
                <!-- 新增/删除 按钮 -->
                <div>
                    <el-button type="primary" round>新增</el-button>
                    <el-button type="success" round>删除</el-button>
                </div>
                <el-table max-height="500" :border="true" ref="tableDatas" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="40"></el-table-column>
                    <el-table-column label="游戏ID" width="70">
                        <template slot-scope="scope" style="text-anign='center'">{{ scope.row.id }}</template> <!-- 游戏ID -->
                    </el-table-column>
                    <el-table-column prop="name" label="游戏名称"></el-table-column> <!-- 游戏名称 -->
                    <el-table-column prop="platform" label="运行平台"></el-table-column> <!-- 运行平台 -->
                    <el-table-column prop="gameType" label="游戏类型"></el-table-column> <!-- 游戏类型 -->
                    <el-table-column prop="appId" label="游戏Appid" show-overflow-tooltip></el-table-column> <!-- 游戏Appid -->
                    <el-table-column prop="developers" label="游戏开发商"></el-table-column> <!-- 游戏开发商 -->
                    <el-table-column prop="state" label="推荐状态"></el-table-column> <!-- 推荐状态 -->
                    <el-table-column prop="" label="显示状态"></el-table-column> <!-- 显示状态 -->
                    <el-table-column prop="" label="支付状态"></el-table-column> <!-- 支付状态 -->
                    <el-table-column prop="download" label="下载次数"></el-table-column> <!-- 下载次数 -->
                    <el-table-column prop="sort" label="排序" width="50"></el-table-column> <!-- 排序 -->
                    <el-table-column prop="" label="添加关联"></el-table-column> <!-- 添加关联 -->
                    <el-table-column label="操作" width="145"> <!-- 操作 -->
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
            <!-- H5游戏 -->
            <el-tab-pane label="H5游戏" name="second">
                <!-- 新增/删除 按钮 -->
                <div>
                    <el-button type="primary" round>新增</el-button>
                    <el-button type="success" round>删除</el-button>

                </div>
                <el-table max-height="500" :border="true" ref="tableDatas" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="游戏ID">
                        <template slot-scope="scope" style="text-anign='center'">{{ scope.row.id }}</template> <!-- 游戏ID -->
                    </el-table-column>
                    <el-table-column prop="name" label="游戏名称"></el-table-column> <!-- 游戏名称 -->
                    <el-table-column prop="gameType" label="游戏类型"></el-table-column> <!-- 游戏类型 -->
                    <el-table-column prop="appId" label="游戏Appid" show-overflow-tooltip></el-table-column> <!-- 游戏Appid -->
                    <el-table-column prop="developers" label="游戏开发商"></el-table-column> <!-- 游戏开发商 -->
                    <el-table-column prop="state" label="推荐状态"></el-table-column> <!-- 推荐状态 -->
                    <el-table-column prop="" label="运营状态"></el-table-column> <!-- 运营状态 -->
                    <el-table-column prop="" label="显示状态"></el-table-column> <!-- 显示状态 -->
                    <el-table-column prop="payment" label="支付状态"></el-table-column> <!-- 支付状态 -->
                    <el-table-column prop="download" label="在玩人数"></el-table-column> <!-- 在玩人数 -->
                    <el-table-column prop="sort" label="排序"></el-table-column> <!-- 排序 -->
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
            <!-- 棋牌 -->
            <el-tab-pane label="棋牌" name="third">
                <!-- 新增/删除 按钮 -->
                <div>
                    <el-button type="primary" round>新增</el-button>
                    <el-button type="success" round>删除</el-button>

                </div>
                <el-table max-height="500" :border="true" ref="tableDatas" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="游戏ID">
                        <template slot-scope="scope" style="text-anign='center'">{{ scope.row.id }}</template> <!-- 游戏ID -->
                    </el-table-column>
                    <el-table-column prop="name" label="游戏名称"></el-table-column> <!-- 游戏名称 -->
                    <el-table-column prop="platform" label="运行平台"></el-table-column> <!-- 运行平台 -->
                    <el-table-column prop="gameType" label="游戏类型"></el-table-column> <!-- 游戏类型 -->
                    <el-table-column prop="appId" label="游戏Appid" show-overflow-tooltip></el-table-column> <!-- 游戏Appid -->
                    <el-table-column prop="developers" label="游戏开发商"></el-table-column> <!-- 游戏开发商 -->
                    <el-table-column prop="state" label="推荐状态"></el-table-column> <!-- 推荐状态 -->
                    <el-table-column prop="" label="显示状态"></el-table-column> <!-- 显示状态 -->
                    <el-table-column prop="payment" label="支付状态"></el-table-column> <!-- 支付状态 -->
                    <el-table-column prop="download" label="下载次数"></el-table-column> <!-- 下载次数 -->
                    <el-table-column prop="sort" label="排序"></el-table-column> <!-- 排序 -->
                    <el-table-column prop="relevance" label="添加关联"></el-table-column> <!-- 添加关联 -->
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
            <!-- 小程序游戏 -->
            <el-tab-pane label="小程序游戏" name="fourth">
                <!-- 新增/删除 按钮 -->
                <div>
                    <el-button type="primary" round>新增</el-button>
                    <el-button type="success" round>删除</el-button>

                </div>
                <el-table max-height="500" :border="true" ref="tableDatas" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="游戏ID">
                        <template slot-scope="scope" style="text-anign='center'">{{ scope.row.id }}</template> <!-- 游戏ID -->
                    </el-table-column>
                    <el-table-column prop="name" label="游戏名称"></el-table-column> <!-- 游戏名称 -->
                    <el-table-column prop="platform" label="运行平台"></el-table-column> <!-- 运行平台 -->
                    <el-table-column prop="gameType" label="游戏类型"></el-table-column> <!-- 游戏类型 -->
                    <el-table-column prop="appId" label="游戏Appid" show-overflow-tooltip></el-table-column> <!-- 游戏Appid -->
                    <el-table-column prop="developers" label="游戏开发商"></el-table-column> <!-- 游戏开发商 -->
                    <el-table-column prop="state" label="推荐状态"></el-table-column> <!-- 推荐状态 -->
                    <el-table-column prop="" label="显示状态"></el-table-column> <!-- 显示状态 -->
                    <el-table-column prop="payment" label="支付状态"></el-table-column> <!-- 支付状态 -->
                    <el-table-column prop="download" label="下载次数"></el-table-column> <!-- 下载次数 -->
                    <el-table-column prop="sort" label="排序"></el-table-column> <!-- 排序 -->
                    <el-table-column prop="relevance" label="添加关联"></el-table-column> <!-- 添加关联 -->
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
            <!-- 端游 -->
            <el-tab-pane label="端游" name="fifth">
                <!-- 新增/删除 按钮 -->
                <div>
                    <el-button type="primary" round>新增</el-button>
                    <el-button type="success" round>删除</el-button>

                </div>
                <el-table max-height="500" :border="true" ref="tableDatas" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="游戏ID">
                        <template slot-scope="scope" style="text-anign='center'">{{ scope.row.id }}</template> <!-- 游戏ID -->
                    </el-table-column>
                    <el-table-column prop="name" label="游戏名称"></el-table-column> <!-- 游戏名称 -->
                    <el-table-column prop="platform" label="运行平台"></el-table-column> <!-- 运行平台 -->
                    <el-table-column prop="gameType" label="游戏类型"></el-table-column> <!-- 游戏类型 -->
                    <el-table-column prop="appId" label="游戏Appid" show-overflow-tooltip></el-table-column> <!-- 游戏Appid -->
                    <el-table-column prop="developers" label="游戏开发商"></el-table-column> <!-- 游戏开发商 -->
                    <el-table-column prop="state" label="推荐状态"></el-table-column> <!-- 推荐状态 -->
                    <el-table-column prop="" label="显示状态"></el-table-column> <!-- 显示状态 -->
                    <el-table-column prop="payment" label="支付状态"></el-table-column> <!-- 支付状态 -->
                    <el-table-column prop="download" label="下载次数"></el-table-column> <!-- 下载次数 -->
                    <el-table-column prop="sort" label="排序"></el-table-column> <!-- 排序 -->
                    <el-table-column prop="relevance" label="添加关联"></el-table-column> <!-- 添加关联 -->
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
            <!-- 网游 -->
            <el-tab-pane label="网游" name="sixth">
                <!-- 新增/删除 按钮 -->
                <div>
                    <el-button type="primary" round>新增</el-button>
                    <el-button type="success" round>删除</el-button>

                </div>
                <el-table max-height="500" :border="true" ref="tableDatas" :data="tableDatas" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="游戏ID">
                        <template slot-scope="scope" style="text-anign='center'">{{ scope.row.id }}</template> <!-- 游戏ID -->
                    </el-table-column>
                    <el-table-column prop="name" label="游戏名称"></el-table-column> <!-- 游戏名称 -->
                    <el-table-column prop="platform" label="运行平台"></el-table-column> <!-- 运行平台 -->
                    <el-table-column prop="gameType" label="游戏类型"></el-table-column> <!-- 游戏类型 -->
                    <el-table-column prop="appId" label="游戏Appid" show-overflow-tooltip></el-table-column> <!-- 游戏Appid -->
                    <el-table-column prop="developers" label="游戏开发商"></el-table-column> <!-- 游戏开发商 -->
                    <el-table-column prop="state" label="推荐状态"></el-table-column> <!-- 推荐状态 -->
                    <el-table-column prop="" label="显示状态"></el-table-column> <!-- 显示状态 -->
                    <el-table-column prop="payment" label="支付状态"></el-table-column> <!-- 支付状态 -->
                    <el-table-column prop="download" label="下载次数"></el-table-column> <!-- 下载次数 -->
                    <el-table-column prop="sort" label="排序"></el-table-column> <!-- 排序 -->
                    <el-table-column prop="relevance" label="添加关联"></el-table-column> <!-- 添加关联 -->
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
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10,20,30,40,50]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalS">
            </el-pagination>
        </div>
    </el-main>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // 绑定值，选中选项卡的 name
            activeName: "first",
            // 游戏手游列表
            tableData: [
                {
                    id: 1,
                    name: "永劫无间",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 2,
                    name: "英雄联盟",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 3,
                    name: "穿越火线",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 4,
                    name: "QQ飞车",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 5,
                    name: "QQ农场",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 6,
                    name: "地下城勇士",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 7,
                    name: "是兄弟就来砍我",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 8,
                    name: "一刀999",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 9,
                    name: "CSGO",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 10,
                    name: "绝地求生",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 11,
                    name: "流星蝴蝶剑",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 12,
                    name: "原神",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 13,
                    name: "王者荣耀",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 14,
                    name: "嘻游记",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 15,
                    name: "一元手游",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 16,
                    name: "55K",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 17,
                    name: "天赐冰雪",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 18,
                    name: "魅影修仙大陆",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 19,
                    name: "云顶",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 20,
                    name: "stame",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 21,
                    name: "wegame",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 22,
                    name: "星际战场",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 23,
                    name: "人类一败涂地",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 24,
                    name: "箭镞",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 25,
                    name: "狼人杀",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
                {
                    id: 26,
                    name: "刀塔",
                    platform: "安卓",
                    gameType: "网游",
                    appId: "3432B125581390EBE",
                    developers: "steam",
                    state: "热门",
                    show: false,
                    payment: true,
                    download: 88,
                    sort: 2,
                    relevance: true,
                },
            ],
            // 列表显示的数量
            tableDatas:[

            ],
            // 进去当前页
            currentPage4: 1,
            // 分页总条数
            totalS: 40,
            // 每页展示多少页
            showNum:5,
            // 当前页
            page : 1,
        };
    },
    methods: {
        // 选项卡切换响应
        handleClick(tab, event) {
            console.log(tab, event);
        },
        // select改变响应
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        // 点击修改响应
        handleEdit(index, row) {
        console.log(index, row);
        },
        // 点击删除响应
        handleDelete(index, row) {
            console.log(index, row);
        },
        // 分页每页展示多少条变化响应
        handleSizeChange(val) {
            this.showNum = val;
            this.tableDatas = this.tableData.slice(0,this.showNum);
            this.handleCurrentChange(this.page)
        },
        // 分页切换时响应
        handleCurrentChange(val) {
            this.page = val
            var start = this.showNum * (val - 1);
            var end = this.showNum * val;
            this.tableDatas = this.tableData.slice(start,end);
        },
        // 总页数增减
        sunPage() {
            this.totalS = this.tableData.length;
        }
    },
    created() {
        this.sunPage();
        this.handleCurrentChange(this.currentPage4);
        this.handleSizeChange(this.showNum);
    }
};
</script>

<style lang="less" scoped>
// 面包屑
.el-breadcrumb {
  margin-bottom: 20px;
}
// 卡片内容

.el-main {
  overflow: hidden;
}

.content {
  width: 100%;
}

// 表格
.el-table--border {
    margin-top: 20px;
}

// 分页
.block {
    text-align: center;
    margin-top: 20px;
}
</style>
