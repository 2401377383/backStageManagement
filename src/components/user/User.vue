<template>
    <div class="user-box">
        <div class="user-top">
            <div class="user-top-one">
                欢迎管理员：<span>{{userS.username}}</span> ，{{userS.date}}
            </div>
        </div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>用户</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片内容 -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>用户列表</span>
                <el-button style="float: right; padding: 3px 0" type="text">刷新</el-button>
            </div>
            <!-- 增删按钮 -->
            <div>
                <el-button type="primary" round>新增</el-button>
                <el-button type="success" round>删除</el-button>
            </div>
            <!-- 用户列表 -->
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userS:{
                username:'admin',
                date:''
            },
            tableData: [{
                date: '2022-05-02',
                name: '王虎',
                address: '长沙市开福区长城万富汇金座1409'
            }, {
                date: '2022-05-04',
                name: '王小虎',
                address: '长沙市开福区长城万富汇金座1409'
            }, {
                date: '2022-05-01',
                name: '王大虎',
                address: '长沙市开福区长城万富汇金座1409'
            }, {
                date: '2022-05-03',
                name: '王虎',
                address: '长沙市开福区长城万富汇金座1409'
            }]
        }
    },
    methods:{
        // 时间定时器
        currentTime() {
            setInterval(this.formatDate, 500);
        },
        // 时间格式化
        formatDate() {
            let date = new Date();
            let year = date.getFullYear(); // 年
            let month = date.getMonth() + 1; // 月
            let day = date.getDate(); // 日
            let week = date.getDay(); // 星期
            let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
            let hour = date.getHours(); // 时
            hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
            let minute = date.getMinutes(); // 分
            minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
            let second = date.getSeconds(); // 秒
            second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
            this.userS.date = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
        }
    },
    created() {
        
    },
    mounted() {
        // 触发定时器
        this.currentTime();
    },
    beforeDestroy() {
        // 销毁定时器
        if (this.formatDate) {
            clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
        }
    }
}
</script>

<style lang="less" scoped>
    .user-box {
        height: 85vh;
        padding: 20px 40px;
        background: rgb(241, 241, 241);
    }

    .box-card {
        margin-top: 20px;
    }

    .user-top {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #fff;
        padding: 10px 0;
        margin-bottom: 20px;
        .user-top-one {
            background-color: #f2f2f2;
            margin: 0 10px;
            border-left: 5px solid #009688;
            padding-left: 20px;
            span {
                color: red;
                cursor: pointer;
            }
        }
    }
</style>
