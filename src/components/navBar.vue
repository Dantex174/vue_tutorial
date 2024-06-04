<script>

</script>

<template>
  <div class="navBar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navBar__btns">
      <MyButtons @click="$router.push('/posts')" style="margin-top: 0px">Посты</MyButtons>
      <MyButtons @click="$router.push('/about')" style="margin-left: 20px; margin-top: 0px">О сайте</MyButtons>
    </div>
  </div>
</template>

<style scoped>
  .navBar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;

    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .navBar__btns {
    margin-left: auto;
  }
</style>