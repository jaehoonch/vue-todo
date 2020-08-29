<template>
  <div id="todo">
    <input type="text" v-model="userInput" @keyup.enter="addNewTodo" />
    <div class="ui divided list">
      <div class="item" :key="todo.id" v-for="todo in this.todoList">
        <div class="content">
          {{todo.text}}
        </div>
      </div>
    </div>
    <!-- <div class="ui divided list">
      <div class="item" :key="todo.id" v-for="todo in allTodos">
        <div class="right floated" content>
          <div class="ui button">Edit</div>
        </div>
        <div class="content">
          <h3>{{ todo.name }} / {{ todo.duedate }}</h3>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      userInput: '',
      todoList: [],
      todoId: 1
    };
  },
  methods: {
    addNewTodo(){
      if(this.userInput != ''){
        this.todoList.push({
          id: this.todoId++,
          text: this.userInput
        });
        this.userInput = '';
      }
    }
  },
  computed: mapGetters(["allTodos"]),
};
</script>

<style>
#todo {
  margin-top: 10px;
}
</style>
