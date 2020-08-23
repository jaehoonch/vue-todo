<template>
  <div id="app" class="ui container">
    <h2>List of Todos</h2>
    <SearchBar />
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo";
import SearchBar from "./components/SearchBar";

export default {
  name: "App",
  components: {
    Todo,
    SearchBar,
  },
};
</script>

<style>
#app {
  margin-top: 70px; /* Add top margin */
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
