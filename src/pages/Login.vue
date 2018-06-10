<template>
    <div>
        <el-input type="text" v-model="username" placeholder="用户名"></el-input>
        <el-input type="password" v-model="password" placeholder="密码"></el-input>
        <el-button type="success" icon="el-icon-check" circle @click="doLogin()"></el-button>
    </div>
</template>

<script>
import http from "@/utils/http";
import Vue from 'vue';
export default {
  name: "Login",
  components: {

  },
  data() {
      return {
          username: '',
          password: ''
      }
  },
  mounted() {

  },
  methods: {
      doLogin: function() {
        let params = {
            username: this.username,
            password: this.password
        }
        let res = http.post('/user/login', params)
        res.then(res => {
            if (res.code == -1){
                this.$message.error(res.message)
                return
            }
            localStorage.setItem('flame_token', res.data.token)
            this.$message({
                message: res.message,
                type: 'success'
            })
            this.$router.push('/')
        })
      }
  }
};
</script>

