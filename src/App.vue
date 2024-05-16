<template>
    <div class="app">
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <input class="input" type="text" placeholder="Название" v-bind:value="title" @input="title = $event.target.value">
            <input class="input" type="text" placeholder="Описание" v-bind:value="body" @input="body = $event.target.value">
            <button class="btn" @click="createPost">Создать</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Название:</strong> {{post.title}}</div>
            <div><strong>Описание:</strong> {{post.body}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                posts: [
                    {id: 1, title: 'Пост о Javascript', body: 'Javascript универсальный язык программирования'},
                    {id: 2, title: 'Пост о Javascript 2', body: 'Javascript универсальный язык программирования'},
                    {id: 3, title: 'Пост о Javascript 3', body: 'Javascript универсальный язык программирования'},
                    {id: 4, title: 'Пост о Javascript 4', body: 'Javascript универсальный язык программирования'},
                ],
                title: '',
                body: ''
            }
        },
        methods: {
            createPost() {
                const newPost = {
                    id: Date.now(),
                    title: this.title,
                    body: this.body,
                }
                this.posts.push(newPost);
                this.title = '',
                this.body = ''
            }

        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
}

.input {
    width: 100%;
    border: 2px solid teal;
    padding: 10px 25px;
    margin-top: 15px;
}

form {
    display: flex;
    flex-direction: column;
}

.app {
    padding: 20px;
}

.btn {
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    color: teal;
    background: none;
    border: 1px solid;
}
</style>