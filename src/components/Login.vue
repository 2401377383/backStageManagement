<template>
  <div class="login-conteainer">
    <div class="login-box">
      <!-- 头像区域 -->
      <div class="avater">
        <img src="	http://114.55.233.5/Public/zong/images/bg.png" alt="" />
      </div>
      <!-- 表单区域 -->
      <el-form class="login-form" :model="form" ref="form" :rules="ruleForm">
        <el-form-item prop="username">
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="iconfont icon-3702mima"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <div class="sidentifyClass">
          <div style="width: 70%" prop="form" class="sidentifyClass_left">
            <el-input
              placeholder="请输入验证码"
              v-model="form.sidentify"
              clearable
              maxlength="4"
            >
            </el-input>
          </div>
          <div
            class="sidentifyClass_right"
            style="border: none"
            @click="refreshCode"
          >
            <!-- <v-sidentify></v-sidentify> -->
            <canvas class="mycanvas" width="100" height="40"
              >抱歉，您的浏览器不支持canvas元素，换个浏览器试试？</canvas
            >
          </div>
        </div>
        <el-form-item class="bts">
          <el-button class="bts-btn" type="primary" @click="login"
            >登录</el-button
          >
          <el-button class="bts-btn" @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
      value: "",
      code: "1234567890",
      form: {
        username: "admin",
        password: "123456",
      },
      ruleForm: {
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 重置按钮
    resetForm() {
      console.log('重置');
    },
    // 跳转至首页
    login() {
      this.$router.push("/home/game/GameList");
    },
    // 点击验证码图片刷新验证码
    refreshCode() {
      this.fourCode();
    },
    // 随机颜色
    randomColor() {
      //得到随机的颜色值
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    // 生成四个随机值
    fourCode() {
      this.value = "";
      for (let a = 0; a < 4; a++) {
        this.value += this.code1();
      }
      this.doDraw();
    },
    // 生成随机值
    code1() {
      let index = Math.floor(Math.random() * (this.code.length - 1) + 1);
      return this.code[index];
    },
    // 生成验证码图片
    doDraw() {
      var x = 20;
      var y = 20 + Math.random() * 8;
      var deg = (Math.random() * 30 * Math.PI) / 180;
      //  获取canvas
      var canvas = document.getElementsByClassName("mycanvas");
      canvas[0].width = canvas[0].width; //清空画布
      canvas[0].height = canvas[0].height;
      var canvas_width = canvas[0].width;
      var canvas_height = canvas[0].height;
      var context = canvas[0].getContext("2d");
      context.font = "bold 23px 微软雅黑";
      context.fillText(this.value, 15, 30);
      context.translate(x, y); //canvas原点的偏移量
      context.rotate(deg); //旋转度数
      context.fillStyle = this.randomColor(); //设置颜色
      context.strokeStyle = this.randomColor(); //设置颜色
      context.rotate(-deg);
      context.translate(-x, -y);
      for (var i = 0; i <= 15; i++) {
        //验证码上显示线条
        context.strokeStyle = this.randomColor(); //轮廓风格
        context.beginPath();
        context.moveTo(
          Math.random() * canvas_width,
          Math.random() * canvas_height
        );
        context.lineTo(
          Math.random() * canvas_width,
          Math.random() * canvas_height
        );
        context.stroke();
      }
      for (var i = 0; i <= 30; i++) {
        //验证码上显示小点
        context.strokeStyle = this.randomColor();
        context.beginPath(); //新建一条路径
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y); //吧画笔移动到指定位置
        context.lineTo(x + 1, y + 1); //想指定位置移动
        context.stroke();
      }
    },
  },
  mounted() {
    // 刷新页面调用验证码
    this.fourCode();
  },
};
</script>

<style lang='less' scoped>
.login-conteainer {
  background: url(http://114.55.233.5/Public/zong/images/bg.png) no-repeat;
  background-color: #2b4b6b;
  background-size: cover;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  .login-box {
    width: 450px;
    height: 300px;
    background-color: #ffff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .avater {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 5px;
    position: absolute;
    box-shadow: 0 0 10px #ddd;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .login-form {
    position: absolute;
    bottom: 0;
    padding: 0 20px;
    width: 100%;
    box-sizing: border-box;
  }
  .bts {
    display: flex;
    // justify-content: flex-end;
    .bts-btn {
      flex-grow: 1 !important;
    }
  }
}
// 验证码
.sidentifyClass {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.mycanvas {
  border: 1px solid rgb(199, 198, 198);
  border-radius: 20%;
}
</style>
