<template>
  <div class="home">
    <div class="container pt-4">
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoList from "../components/TodoList";

export default {
  name: "Home",
  components: {
    TodoList,
  },
};
</script>