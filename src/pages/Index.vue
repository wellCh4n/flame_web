<template>
  <div>
    <navigation :activeItem="activeItem"></navigation>
    <div class="articles" v-for="article in content">
        <!-- 标题：{{article.title}}</br>
        内容：{{article.content}} -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{article.title}}</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">阅读全文</el-button> -->
            <router-link :to="{path: '/article/' + article._id}">
              阅读全文 {{article.id}}
            </router-link>
          </div>
          <div class="text item">
            <div class="tags" v-for="t in article.tag"> 
              <el-tag type="info" size="mini">{{t}}</el-tag>
            </div>
            {{article.content}}
          </div>
        </el-card>
    </div>
  </div>
</template>

<script>
import headerc from "@/components/Header";
import navigation from "@/components/Navigation";

import http from "@/utils/http";

export default {
  name: "Index",
  components: {
    headerc,
    navigation
  },
  data() {
    return {
      content: [],
      activeItem: '0'
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    fetchArticles: function() {
      let params = {};
      let res = http.get("/article/getArticleList", params);
      res.then(res => {
        console.log(res.data.docs)
        this.content = res.data.docs
      });
    }
  }
};
</script>

<style scoped>
.articles {
  clear: both;
}
.box-card {
  margin-top: 10px;
}
.el-tag {
  margin-right: 5px;
}
.tags {
  float: left;
}
a{
  color: #000;
}
</style>
