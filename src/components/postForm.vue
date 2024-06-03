<template>
        <form @submit.prevent>
            <h4>Создание поста</h4>
            <!-- <input class="input" type="text" placeholder="Название" v-bind:value="title" @input="post.title = $event.target.value">
            <input class="input" type="text" placeholder="Описание" v-bind:value="body" @input="post.body = $event.target.value"> -->

            <MyInput placeholder="Название" v-model="post.title"/>
            <MyInput placeholder="Описание" v-model="post.body"/>
            <MyButtons @click="createPost">Создать</MyButtons>
        </form>
</template>

<script>

    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost(post) {
                this.post.id = Date.now();
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: ''
                }
            }
        },
      // watch: {
      //     post: {
      //       handler(newValue) {
      //         console.log(newValue)
      //       },
      //       deep: true,
      //     }
      // }
    }
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

</style>