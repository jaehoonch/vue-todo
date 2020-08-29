<template>
  <div id="app" class="ui container">
    <h2>List of Todos</h2>
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
