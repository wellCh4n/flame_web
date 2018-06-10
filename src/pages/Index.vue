<template>
  <div>
    <navigation></navigation>
    <div class="articles" v-for="article in content">
        <!-- 标题：{{article.title}}</br>
        内容：{{article.content}} -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{article.title}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">阅读全文</el-button>
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
      content: []
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
        this.content = res.data.docs;
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
</style>
