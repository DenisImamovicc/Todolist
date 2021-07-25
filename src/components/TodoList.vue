<template>
  <div class="TodoList">
    <TodoItem v-for="(todo, i) in todolist" :key="i" :todo="todo" />
    <p v-if="this.$store.state.todolist.length === 0" class="text-center">This biz is empty,yeet!</p>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem,
  },

  computed: {
    todolist() {
      return this.$store.state.todolist;
    },
  },
};
</script>

<style scoped>
.TodoList {
  margin: 0 auto;
  padding: 2rem;
  box-shadow: 0px 0px 5px;
  margin-bottom: 5rem;
}
</style>