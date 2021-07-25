<template>
  <div class="card p-1 my-2" :class="{ completed: this.todo.completed }">
    <div class="card-bodyjustify-content-end">
      <div class="d-flex flex-row justify-content-end bg-primary">
        <button class="bg-success text-white" @click="completeTodo">✓</button>
        <button class="bg-danger text-white" @click="removeTodo">X</button>
      </div>
      <h5 class="card-title">{{ todo.desc }}</h5>
      <p class="card-text">
        Created {{ todo.date }} <b>{{ todo.author }}</b>
      </p>
      <div class="d-inline-flex flex-column">
        <button class="up" @click="moveTodoUp">↑</button>
        <button class="down" @click="moveTodoDown">↓</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  methods: {
    removeTodo() {
      this.$store.commit("removeTodo", this.todo);
    },
    completeTodo() {
      this.$store.commit("completeTodo", this.todo);
    },
    moveTodoUp() {
      this.$store.commit("moveTodoUp", this.todo);
    },
    moveTodoDown() {
      this.$store.commit("moveTodoDown", this.todo);
    },
  },
};
</script>

<style scoped>
.completed {
  background: lightgreen;
}
</style>