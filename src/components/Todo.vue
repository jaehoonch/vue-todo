<template>
  <div id="todo">
    <h3>{{this.todoList}}</h3>
    <h3>{{this.selectedList}}</h3>
    <h1>List of Todos (Active: {{activeTodoList.length}}, Done: {{doneTodoList.length}})</h1>
    <!-- Input Content -->
    <div class="ui massive fluid input">
      <input type="text" v-model="userInput" placeholder="Add Todo.." @keyup.enter="addNewTodo" />
    </div>
    <!-- Filter Button -->
    <div id="filter" class="three large ui buttons">
      <button class="ui button active" @click="setSelectedList('all')">All</button>
      <button class="ui button" @click="setSelectedList('active')">Active</button>
      <button class="ui button" @click="setSelectedList('done')">Done</button>
    </div>
    <template v-if="activeTodoList.length > 0">
      <div class="ui segment">
        <div class="ui huge divided list">
          <div class="item" :key="todo.id" v-for="todo in this.selectedList">
            <!-- Item Content -->
            <div class="right floated content">
              <div class="ui button" @click="enterEditMode(todo)">Edit</div>
              <div class="ui button" @click="toggleDoneStatus(todo)">Done</div>
            </div>
            <div class="content">
              <div class="header">
                <!-- If editMode is False, just display the texts -->
                <div v-if="!todo.editMode">{{todo.id}} / {{todo.text}} / {{todo.done}}</div>
                <!-- If editMode is True, enter edit mode -->
                <input
                  v-else
                  type="text"
                  v-model="todo.text"
                  @keyup.enter="exitEditMode(todo)"
                  @blur="exitEditMode(todo)"
                />
              </div>
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
// import { mapGetters } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      userInput: "",
      todoList: [],
      selectedList: [],
      todoId: 1,
    };
  },
  methods: {
    addNewTodo() {
      if (this.userInput != "") {
        this.todoList.push({
          id: this.todoId,
          text: this.userInput,
          done: false,
          editMode: false,
        });
        this.userInput = "";
        this.todoId++;
      }
    },
    // Toggle done status of a todo when Done button is pressed
    toggleDoneStatus(todo) {
      todo.done = todo.done === false ? true : false;
    },
    enterEditMode(todo) {
      todo.editMode = todo.editMode === false ? true : false;
      // todo.editMode = true;
    },
    exitEditMode(todo) {
      todo.editMode = false;
    },
    setSelectedList(category) {
      switch (category) {
        case "all":
          this.selectedList = this.todoList;
          break;
        case "active":
          this.selectedList = this.todoList.filter(
            (todo) => todo.done === false
          );
          break;
        case "done":
          this.selectedList = this.todoList.filter(
            (todo) => todo.done === true
          );
          break;
        default:
          return "Unexpected";
      }
    },
  },
  computed: {
    activeTodoList() {
      return this.todoList.filter((todo) => todo.done === false);
    },
    doneTodoList() {
      return this.todoList.filter((todo) => todo.done === true);
    },
  },
};
</script>

<style>
#todo {
  margin-top: 10px;
}
#filter {
  margin-top: 10px;
}
</style>
