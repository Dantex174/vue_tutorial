<script>
  export default {
    name: "MyInput",
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>

<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input">
</template>

<style scoped>
  .input {
    width: 100%;
    border: 2px solid teal;
    padding: 10px 25px;
    margin-top: 15px;
  }
</style>