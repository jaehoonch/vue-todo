<template>
  <div id="todo">
    <h2>List of Todos ({{this.todoList.length}})</h2>
    <div class="ui massive fluid input">
      <input type="text" v-model="userInput" placeholder="Add Todo.." @keyup.enter="addNewTodo" />
    </div>
    <div class="ui segment">
      <div class="ui huge divided list">
        <div class="item" :key="todo.id" v-for="todo in this.todoList">
          <!-- Content for each Item -->
          <div class="right floated content">
            <div class="ui button">Modify</div>
            <div class="ui button">Delete</div>
          </div>
          <div class="content">
            <div class="header">{{todo.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      userInput: "",
      todoList: [],
      todoId: 1,
    };
  },
  methods: {
    addNewTodo() {
      if (this.userInput != "") {
        this.todoList.push({
          id: this.todoId++,
          text: this.userInput,
        });
        this.userInput = "";
      }
    },
  },
  computed: mapGetters(["allTodos"]),
};
</script>

<style>
#todo {
  margin-top: 10px;
}
</style>
