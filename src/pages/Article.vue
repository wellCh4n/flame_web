<template>
    <div>
        <navigation :activeItem="activeItem"></navigation>
        {{title}}
        {{content}}
    </div>
</template>

<script>
import headerc from "@/components/Header";
import navigation from "@/components/Navigation";

import http from "@/utils/http";

export default {
    name: "Article",
    components: {
        headerc,
        navigation
    },
    data() {
        return {
            id: '',
            title: '',
            content: '',
            tags: [],
            activeItem: '1'
        }
    },
    mounted() {
        this.fetchArticle(this.$route.params.id);
    },
    methods: {
        fetchArticle: function(id) {
            let params = {
                id: id
            }
            let res = http.get('/article/getArticle', params)
            res.then(res => {
                let article = res.data
                this.title = article.title
                this.content = article.content
            })
        }
    }
}
</script>
