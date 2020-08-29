<template>
  <div id="app" class="ui container">
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<style>
#app {
  margin-top: 70px; /* Add top margin */
}
</style>
