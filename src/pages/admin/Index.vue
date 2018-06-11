<template>
    <div>
        <el-button type="success" round style="float: right; margin-right: 10px; margin-top: 10px;" @click="editArticle('new')">写文章</el-button>
        <el-table
            :data="content"
            style="width: 100%">
            <el-table-column
                prop="title"
                label="标题"
                width="300">
            </el-table-column>
            <el-table-column
                prop="content"
                fit="false"
                label="内容">
            </el-table-column>
            <el-table-column
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle @click="editArticle(scope.row._id)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="deleteArticle(scope.$index, content, scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import http from "@/utils/http";

export default {
  name: "Index",
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
        console.log(res.data.docs);
        this.content = res.data.docs;
      });
    },
    deleteArticle: function(index, rows, id) {
      this.$confirm("此操作将永久删除该文件, 是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log("true");
          this.doDeleteArticle(index, rows, id)
        })
        .catch(() => {
          console.log("false");
        });
    },
    doDeleteArticle: function(index, rows, id) {
      let params = {
        id: id
      };
      let res = http.post("/article/removeArticle", params);
      res.then(res => {
        if (res.code == 1) {
          rows.splice(index, 1)
          this.$message({
            message: "删除成功",
            type: "warning"
          });
        }
      });
    },
    editArticle: function(id) {
        this.$router.push('/admin/article/edit/' + id)
    }
  }
};
</script>
