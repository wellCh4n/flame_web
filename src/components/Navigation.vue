<template>
    <div>
        <el-menu :default-active="navList[activeItem].index" mode="horizontal">
            <el-menu-item v-for="navItem in navList" :index="navItem.index">
                <router-link :to="{path: navItem.hashTag}">
                  {{navItem.name}}
                </router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "navigation",
  props: ['activeItem'],
  data() {
    return {
      navList: [
        {
          name: "Index",
          hashTag: "/",
          index: "1",
          icon: ""
        },
        {
          name: "Article",
          hashTag: "article",
          index: "2",
          icon: "el-icon-document"
        },
        {
          name: "Tag",
          hashTag: "tag",
          index: "3",
          icon: "el-icon-caret-right"
        },
        {
          name: "About",
          hashTag: "about",
          index: "4",
          icon: "el-icon-info"
        },
        {
          name: "CV",
          hashTag: "cv",
          index: "5",
          icon: "el-icon-tickets"
        }
      ]
    };
  },
  mounted() {
    
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
