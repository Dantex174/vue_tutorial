<script>
  export default {
    name: "MyDialog",
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      hideDialog() {
        this.$emit("update:show", false);
      }
    }
  }
</script>

<template>
  <div v-if="show === true" @click.stop="hideDialog" class="dialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .dialog {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }
  .dialog__content {
    margin: auto;
    background: #fff;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
</style>