<template>
    <div>
        <el-input v-model="title" placeholder="标题"></el-input>
        <vue-editor-markdown v-model="markdown"></vue-editor-markdown>
        <el-button type="success" round @click="updateArticle(id)">保存</el-button>
    </div>
</template>

<script>
import VueEditorMarkdown from 'vue-editor-markdown'

import http from "@/utils/http"

export default {
    name: "Editor",
    data() {
        return {
            id: '',
            title: '',
            content: '',
            markdown: {
                markdown: '',
                html: ''
            }
        }
    },
    components: {
        VueEditorMarkdown
    },
    mounted() {
        let id = this.$route.params.id
        this.id = id
        if (id == 'new') {
            console.log('new')
            this.title = '',
            this.content = '',
            this.markdown.markdown = '',
            this.markdown.html = ''
            return
        }
        this.fetchArticle(id)
    },
    methods: {
        fetchArticle: function(id) {
            let params = {
                id: id
            }
            let res = http.get('/article/getArticle', params)
            res.then(res => {
                let article = res.data
                console.log(article)
                this.title = article.title
                this.markdown.markdown = article.markdown
                this.markdown.html = article.html
            })
        },
        updateArticle: function(id) {
            if (id == 'new') {
                console.log('new')
                let params = {
                    title: this.title,
                    content: this.markdown.html,
                    markdown: this.markdown.markdown
                }
                let res = http.post('/article/addArticle', params)
                res.then(res => {
                    if (res.code == 1) {
                        console.log('成功')
                        return
                    }
                    console.log('失败')
                })
            } else {
                console.log('update')
                let params = {
                    id: this.id,
                    title: this.title,
                    content: this.markdown.html,
                    markdown: this.markdown.markdown
                }
                let res = http.post('/article/updateArticle', params)
                res.then(res => {
                    if (res.code == 1) {
                        console.log('成功')
                        return
                    }
                    console.log('失败')
                })
            }
        }
    }
}
</script>
