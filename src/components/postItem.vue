<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong> {{post.title}}</div>
            <div><strong>Описание:</strong> {{post.body}}</div>
        </div>
        <div class="post__btn">
            <MyButtons @click="$router.push(`/posts/${post.id}`)" >Открыть</MyButtons>
            <MyButtons @click="$emit('remove', post)" >Удалить</MyButtons>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            require: true,
        }
    }
}
</script>

<style scoped>

    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .post__btn {
      display: flex;
    }

</style>