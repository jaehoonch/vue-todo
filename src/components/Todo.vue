<template>
  <div id="todo">
    <h1>List of Todos ({{this.todoList.length}})</h1>
    <div class="ui massive fluid input">
      <input type="text" v-model="userInput" placeholder="Add Todo.." @keyup.enter="addNewTodo" />
    </div>
    <template v-if="this.todoList.length > 0">
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
    </template>
    <template v-else>
      <h2>No Todo at this time...</h2>
    </template>
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
