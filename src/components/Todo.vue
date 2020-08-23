<template>
  <div>
    <div class="ui divided list">
      <div class="item" :key="todo.id" v-for="todo in allTodos">
        <div class="right floated" content>
          <div class="ui button">Edit</div>
        </div>
        <div class="content">
          <h3>{{ todo.name }} / {{ todo.duedate }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Todo",
  computed: mapGetters(["allTodos"]),
};
</script>

<style></style>
